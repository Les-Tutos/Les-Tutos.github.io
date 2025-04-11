import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { $ } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import {
  isDecimal,
  sumDecimal,
  getRandomNumber,
} from "~/components/utils/number";

export default component$(() => {
  return (
    <>
      <div class="title"> Les nombres décimaux </div>
      <DefDecimal />
      <ActIsDecimal />
      <MethSum />
      <ActSum />
      <ExeSum />
      <Footer />
    </>
  );
});

const DefDecimal = component$(() => {
  return (
    <div class="courses">
      <h2> Définition </h2>
      <p>
        Un nombre décimal est un nombre qui peut s'écrire avec un nombre fini de
        chiffres après la virgule <br />
        Par exemple :
      </p>
      <ul>
        <li> 1,1 </li>
        <li> 40,98 </li>
        <li> 0,03 </li>
        <li> 1 </li>
      </ul>
      <p>
        Sont des nombres décimaux. <br />
        En effet :
      </p>
      <ul>
        <li> 1,1 possède un unique chiffre après la virgule</li>
        <li> 40,98 possède 2 chiffres après la virgule</li>
        <li> 0,03 possède aussi 2 chiffres après la virgule</li>
        <li> 1 possède 0 chiffre après la virgule</li>
      </ul>
      <p>
        En revanche, 2/3 qui s'écrirait 0,6666... avec une infinité de 6 n'est
        pas un nombre décimal car il n'y a pas un nombre fini de chiffres après
        la virgule (ici une infinité). <br />
        De même pour π qui s'écrit 3,14159265358979323846... avec une infinité
        de chiffres
      </p>
    </div>
  );
});

const ActIsDecimal = component$(() => {
  const actIsDecimal = useStore({ inputValue: "" });
  const handleInputChange = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    actIsDecimal.inputValue = target.value;
  });
  const nombreDecimal = $(() => {
    if (actIsDecimal.inputValue.trim() === "") {
      return "Aucun texte n'a encore été entré";
    } else if (isDecimal(actIsDecimal.inputValue)) {
      return "Il s'agit bien d'un nombre décimal !";
    } else {
      return "Ceci n'est pas un nombre décimal.";
    }
  });
  return (
    <div class="activity">
      <h2> Est-ce un nombre décimal ?</h2>
      <p>
        Dans cette activité, vous pouvez entrer un nombre pour savoir s'il
        s'agit d'un nombre en écriture décimale !<br />
        <br />
        <input
          type="text"
          value={actIsDecimal.inputValue}
          onInput$={handleInputChange}
          placeholder="Entrez quelque chose..."
        />
      </p>
      <p>{nombreDecimal()} </p>
    </div>
  );
});

const MethSum = component$(() => {
  return (
    <div class="method">
      <h2> Addition de nombres décimaux </h2>
      <p>
        Pour additionner des nombres décimaux, on procède de la même manière que
        pour les nombres entiers. <br />
        On aligne les virgules et on additionne les chiffres de droite à gauche.
        Si un nombre possède plus de chiffres après la virgule, il suffit
        d'ajouter des 0 à la suite du nombre qui en a le moins. <br />
        <br />
        Par exemple :
      </p>

      <div style="display: inline-block; font-family: monospace; text-align: right; line-height: 1.4;">
        <div> 23,40</div>
        <div>+ 12,73</div>
        <div>-------</div>
        <div> 36,13</div>
      </div>
    </div>
  );
});

const ActSum = component$(() => {
  const actSumDecimals = useStore({
    inputValue1: "",
    inputValue2: "",
    result: "",
  });

  const handleInputChange1 = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    actSumDecimals.inputValue1 = target.value;
  });

  const handleInputChange2 = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    actSumDecimals.inputValue2 = target.value;
  });

  const handleSumClick = $(() => {
    const value1 = actSumDecimals.inputValue1.trim();
    const value2 = actSumDecimals.inputValue2.trim();

    if (value1 === "" || value2 === "") {
      actSumDecimals.result = "Veuillez entrer les deux nombres.";
    } else if (isDecimal(value1) && isDecimal(value2)) {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);
      actSumDecimals.result = `La somme est : ${sumDecimal(num1, num2)}`;
    } else {
      actSumDecimals.result =
        "Les deux entrées doivent être des nombres décimaux.";
    }
  });

  return (
    <div class="activity">
      <h2> Additionnez deux nombres décimaux </h2>
      <p>
        Dans cette activité, vous pouvez entrer deux nombres décimaux et les
        additionner !<br />
        <input
          type="text"
          value={actSumDecimals.inputValue1}
          onInput$={handleInputChange1}
          placeholder="Entrez le premier nombre..."
        />
        <input
          type="text"
          value={actSumDecimals.inputValue2}
          onInput$={handleInputChange2}
          placeholder="Entrez le second nombre..."
        />
      </p>
      <button onClick$={handleSumClick}>Calculer la somme</button>
      <p>{actSumDecimals.result}</p>
    </div>
  );
});

const ExeSum = component$(() => {
  const actRandomNumbers = useStore({ num1: 0, num2: 0, sum: 0 });

  const generateRandomNumbers = $(() => {
    const randomNum1 = getRandomNumber(0, 10000);
    const randomNum2 = getRandomNumber(0, 10000);
    actRandomNumbers.num1 = randomNum1 / 100;
    actRandomNumbers.num2 = randomNum2 / 100;
  });

  const calculateSum = $(() => {
    actRandomNumbers.sum = sumDecimal(
      actRandomNumbers.num1,
      actRandomNumbers.num2,
    );
  });
  return (
    <div class="exercices">
      <button onClick$={generateRandomNumbers}>
        Générer deux nombres aléatoires
      </button>
      <p>Nombre 1 : {actRandomNumbers.num1}</p>
      <p>Nombre 2 : {actRandomNumbers.num2}</p>
      <button onClick$={calculateSum}>Sommer</button>
      <p>Somme : {actRandomNumbers.sum}</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Les nombres décimaux ",
  meta: [
    {
      name: "description",
      content: "Une page interactive sur les nombres décimaux",
    },
  ],
};

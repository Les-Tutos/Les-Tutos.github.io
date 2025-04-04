import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { $ } from "@builder.io/qwik";
import { isDecimal } from "../../utils/number";

export default component$(() => {
  const state = useStore({ inputValue: "" });

  const handleInputChange = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    state.inputValue = target.value;
  });
  const nombreDecimal = $(() => {
    if (state.inputValue.trim() === "") {
      return "Aucun texte n'a encore été entré";
    } else if (isDecimal(state.inputValue)) {
      return "Il s'agit bien d'un nombre décimal !";
    } else {
      return "Ceci n'est pas un nombre décimal.";
    }
  });
  return (
    <>
      <div class="title"> Les nombres décimaux </div>
      <div class="courses">
        <h2> Définition </h2>
        <p>
          Un nombre décimal est un nombre qui peut s'écrire avec un nombre fini
          de chiffres après la virgule <br />
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
          <li> 1,1 possède un uniqume chiffre après la virgule</li>
          <li> 40,98 possède 2 chiffres après la virgule</li>
          <li> 0,03 possède aussi 2 chiffres après la virgule</li>
          <li> 1 possède 0 chiffres après la virgule</li>
        </ul>
        <p>
          En revanche, 2/3 qui s'écrirait 0,6666... avec une infinité de 6 n'est
          pas un nombre décimal car il n'y a pas un nombre fini de chiffres
          après la virgule (ici une infinité). <br />
          De même pour π qui s'écrit 3,14159265358979323846... avec une infinité
          de chiffres
        </p>
      </div>{" "}
      <div class="activity">
        <h2> Est-ce un nombre décimal ?</h2>
        <p>
          Dans cette activité, vous pouvez entrer un nombre pour s'avoir s'il
          s'agit d'un nombre en écriture décimale !<br />
          <br />
          <input
            type="text"
            value={state.inputValue}
            onInput$={handleInputChange}
            placeholder="Entrez quelque chose..."
          />
        </p>
        <p>{nombreDecimal()} </p>
      </div>
    </>
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

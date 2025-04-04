import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getRandomNumber } from "../../utils/number";

export default component$(() => {
  const randomNum = useSignal(getRandomNumber(1, 50));
  return (
    <>
      <div class="title"> Suite de nombres </div>
      <div>Bientôt disponible</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Suite de nombres",
  meta: [
    {
      name: "description",
      content: "Un site avec des cours et des exercices mathématiques",
    },
  ],
};

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
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

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";

export default component$(() => {
  return (
    <>
      <h1>Tuto Maths</h1>
      <div>
        <a href="decimaux"> Les nombres décimaux </a>
        <br />
        <a href="suites"> Les suites </a>
      </div>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Tuto Maths",
  meta: [
    {
      name: "description",
      content: "Page principale de Tuto Maths",
    },
  ],
};

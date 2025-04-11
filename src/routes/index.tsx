import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";

export default component$(() => {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
  </style>;
  return (
    <>
      <h1 style="font-size: 4em; text-align: center;">Tuto Maths</h1>
      <div style="font-size: 2em;">
        <a class="chapter" href="decimaux">
          Les nombres décimaux
        </a>
        <br />
        <a class="chapter" href="suites">
          Les suites
        </a>
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

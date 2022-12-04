import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <link rel="stylesheet" href="https://use.typekit.net/hhl1biy.css"></link>
      <title>
        {title}
        {title ? " | " : ""} Hairways din frisør på Straume
      </title>
    </NextHead>
  );
}
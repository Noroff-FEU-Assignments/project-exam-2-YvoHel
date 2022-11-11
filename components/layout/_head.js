import NextHead from "next/head";
import Script from "next/script";

export default function Head({ title = "" }) {
 return (
  <NextHead>
    <link rel="stylesheet" href="https://use.typekit.net/hhl1biy.css"></link>
    <Script src="https://kit.fontawesome.com/de00a4f075.js" crossorigin="anonymous"/>
    <title>
    {title}
    {title ? " | " : ""} Hairways din frisør på Straume
   </title>
  </NextHead>
 );
}
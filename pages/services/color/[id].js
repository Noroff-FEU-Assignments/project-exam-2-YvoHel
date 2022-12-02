import Layout from "../../../components/layout/_layout";
import Head from "../../../components/layout/_head";
import { BASE_URL_FARGE } from "../../../constants/api";


export default function Color({color}) {
    return (
      <h1>{color.title.rendered}</h1>
    );
   }
   
   export async function getStaticPaths() {
  
     const response = await fetch(BASE_URL_FARGE);
     const colors = await response.json()
     
     console.log(colors);
   
  
     const paths = colors.map((color) => ({
      params: { id: color.id.toString()},
     }));
   
     console.log(paths);

    return { paths, fallback: false }
   


}

export async function getStaticProps({ params }) {
   
    const res = await fetch(`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`)
        const color = await res.json()
   
    return {
     props: { color:color },
    };
   }
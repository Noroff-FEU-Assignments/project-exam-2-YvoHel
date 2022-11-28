import Layout from "../../components/layout/_layout";
import Head from "../../components/layout/_head";
import { BASE_URL_KLIPP } from "../../constants/api";


export default function Cut({ cut }) {
    return (
     <Layout>
      <Head title={cut.title} />
      <h1>{cut.title.rendered}</h1>
     </Layout>
    );
   }
   
   export async function getStaticPaths() {
    try {
   
     const response = await fetch(BASE_URL_KLIPP);
     const cuts = await response.json()
     
     console.log(cuts);
   
  
     const paths = cuts.map((cut) => ({
      params: { id: cut.id },
     }));
   
     console.log(paths);
   
     return { paths, fallback: false };
    } catch (error) {
     console.log(error);
    }
   }
   
   export async function getStaticProps({ params }) {
   
    const res = await fetch(`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`)
        const cut = await res.json()
   
    return {
     props: { cut:cut },
    };
   }
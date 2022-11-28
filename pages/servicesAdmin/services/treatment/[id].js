import Layout from "../../../components/layout/_layout";
import Head from "../../../components/layout/_head";
import { BASE_URL_BEHANDLING, BASE_URL_FARGE } from "../../../constants/api";


export default function Treatment({treatment}) {
    return (
     <Layout>
      <Head title={treatment.title.rendered} />
      <h1>{treatment.title.rendered}</h1>
     </Layout>
    );
   }
   
   export async function getStaticPaths() {
  
     const response = await fetch(BASE_URL_BEHANDLING);
     const treatments = await response.json()
     
     console.log(treatments);
   
  
     const paths = treatments.map((treatment) => ({
      params: { id: treatment.id.toString()},
     }));
   
     console.log(paths);

    return { paths, fallback: false }
   


}

export async function getStaticProps({ params }) {
   
    const res = await fetch(`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`)
        const treatment = await res.json()
   
    return {
     props: { treatment:treatment },
    };
   }
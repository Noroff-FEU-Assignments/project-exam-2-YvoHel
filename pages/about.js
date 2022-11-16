import Head from "next/head";
import Layout from "../components/layout/_layout";
import AboutSection from "../components/about-section/_about-section";
import Reviews from "../components/about-section/_reviews";
import axios from "axios";
import { BASE_URL_ANSATTE} from "../constants/api";

export default function About(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />
      <AboutSection/>
      {props.employes.map((employe) => {
        return <h3 key={employe.id}>{employe.id}</h3>;
      })}
      <Reviews/>
      </Layout>
  );
}

export async function getStaticProps() {

  let employes = [];

  try {
    const response = await axios.get(BASE_URL_ANSATTE);
   
    console.log(response.data);
 
    employes = response.data;
  } catch (error) {
    console.log(error);
  }


  return {
    props: {
      employes: employes,
    },
  };
}
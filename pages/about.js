import Head from "next/head";
import Layout from "../components/layout/_layout";
import axios from "axios";
import { BASE_URL_ANSATTE} from "../constants/api";
import Image from "next/image";

export default function About(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />
      <div className="about">
        <Image src ="/Hairdesser1.jpeg" width="2000" height="1333" alt="Image of hairways As locals"></Image>
        <div className ="about-text">
          <h1>Her kan vi skrive litt om salongen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
          </p>
        </div>
        <h2>Våre ansatte</h2>
        <div className="employes-container">
          {props.employes.map((employe) => {
          return <div className="employes" key={employe.id}>
          <Image src ="/Portrait_Placeholder.png" width="600" height="600" alt="Image of a employe at hairways as"></Image>
          <h3>{employe.title.rendered}</h3>
          {employe.excerpt.rendered}
          </div>;
          })}
        </div>
        <h2>Kundeomtaler</h2>
      </div>
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
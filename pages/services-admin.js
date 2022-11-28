import Head from "next/head";
import Layout from "../components/layout/_layout";
import axios from "axios";
import Link from "next/link";
import {BASE_URL_BEHANDLING, BASE_URL_FARGE, BASE_URL_KLIPP } from "../constants/api";

export default function Servises(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />
      <Link href= "/add/addCut"><a>Add Cut</a></Link>
      {props.cut.map((cut) => {
        return <a key={cut.id} href={`editPages/cut/${cut.id}`}>
          {cut.title.rendered}{cut.slug}<button>Edit</button>
          </a>;
      })}
      <Link href= "/add/addTreatment"><a>Add Treatment</a></Link>
           {props.treat.map((treat) => {
        return <a key={treat.id} href={`editPages/treatment/${treat.id}`}>
          {treat.title.rendered}{treat.slug}<button>Edit</button>
          </a>;
      })}
      <div>
      <Link href= "/add/addColor"><a>Add Color</a></Link>
      {props.color.map((color) => {
        return <h2 key={color.id}> {color.title.rendered}{color.id} 
          <a href={`editPages/color/${color.id}`}><button>Edit</button></a>
          </h2>
          ;
      })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {

  let cut = [];
  let treat = [];
  let color = [];

  try {
    const response = await axios.get(BASE_URL_KLIPP);
   
    console.log(response.data);
 
    cut = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const resp = await axios.get(BASE_URL_BEHANDLING);

    console.log(resp.data);

    treat = resp.data;
  } catch (error) {
    console.log(error);
  }
  
  try {
    const res = await axios.get(BASE_URL_FARGE);
    
    console.log(res.data);

    color = res.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      cut: cut,
      treat : treat,
      color: color,
    },
  };
}
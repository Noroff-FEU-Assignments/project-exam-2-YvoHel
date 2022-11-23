import Head from "next/head";
import Layout from "../components/layout/_layout";


import axios from "axios";
import {BASE_URL_BEHANDLING, BASE_URL_FARGE, BASE_URL_KLIPP } from "../constants/api";

export default function Servises(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />

      {props.cut.map((cut) => {
        return <h3 key={cut.slug}>{cut.title.rendered}</h3>;
      })}

           {props.treat.map((treat) => {
        return <h3 key={treat.slug}>{treat.title.rendered}</h3>;
      })}
      
      {props.color.map((color) => {
        return <h3 key={color.slug}>{color.title.rendered}</h3>;
      })}
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


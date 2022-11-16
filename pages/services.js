import Head from "next/head";
import Layout from "../components/layout/_layout";


import axios from "axios";
import {BASE_URL_BEHANDLING, BASE_URL_FARGE, BASE_URL_KLIPP } from "../constants/api";

export default function Index(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />

      {props.games.map((game) => {
        return <h3 key={game.slug}>{game.id}</h3>;
      })}

           {props.games.map((game) => {
        return <h3 key={game.slug}>{game.id}</h3>;
      })}
      
      {props.games.map((game) => {
        return <h3 key={game.slug}>{game.id}</h3>;
      })}
    </Layout>
  );
}

export async function getStaticProps() {

  let games = [];
  let treat = [];
  let color = [];

  try {
    const response = await axios.get(BASE_URL_KLIPP);
   
    console.log(response.data);
 
    games = response.data;
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
      games: games,
      treat : treat,
      color: color,
    },
  };
}


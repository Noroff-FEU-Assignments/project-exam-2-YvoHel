import Head from "next/head";
import Layout from "../components/layout/_layout";
import AboutSection from "../components/about-section/_about-section";
import Employes from "../components/about-section/_employes";
import Reviews from "../components/about-section/_reviews";

export default function About() {
 return (
  <Layout>
   <Head title="Om oss" />
   <AboutSection/>
   <Employes/>
   <Reviews/>
   </Layout>
 );
}
import Head from "next/head";
import Layout from "../components/layout/_layout";
import MediaDropdown from "../components/about-section/_employes";


export default function EmployesAdmin() {
 return (
   <Layout>
   <Head>
    <title>Admin</title>
   </Head>
   <MediaDropdown/>
   </Layout>
  
 );
}
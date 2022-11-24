import Head from "next/head";
import Layout from "../components/layout/_layout";
import MediaDropdown from "../components/about-section/_employes";
import AddPost from "./addPost";
import Link from "next/link";


export default function EmployesAdmin() {
 return (
   <Layout>
   <Head>
    <title>Admin</title>
   </Head>
   <MediaDropdown/>
   <Link href= "/addPost"><a>Add post</a></Link>
   </Layout>
  
 );
}
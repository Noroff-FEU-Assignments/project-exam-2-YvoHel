import Head from "next/head";
import Layout from "../components/layout/_layout";
import EmployeList from "../components/lists/_employeList";
import Link from "next/link";


export default function EmployesAdmin() {
 return (
   <Layout>
   <Head>
    <title>Admin</title>
   </Head>
   <Link href= "/addPost"><a>Add post</a></Link>
   <EmployeList/>
   </Layout>
  
 );
}
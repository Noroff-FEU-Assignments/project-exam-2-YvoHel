import Head from "next/head";
import Layout from "../components/layout/_layout";
import Phone from "../components/icons/_phone";
import Mail from "../components/icons/_mail";
import MapIcon from "../components/icons/_map-icon"
import Form from "../components/form/_form";
import Footer from "../components/layout/_footer";


export default function Contact() {
 return (
  <Layout>
   <Head>
    <title>Kontakt </title>
    </Head>
    <div class="contact">
    <div class="contact-info">
            <h2>LURER DU PÅ NOE?</h2>
            <p>Ta gjerne kontakt med oss om du har noen spørsmål om våre tjenester.</p>
            <p> <Phone/> 98 10 00 11</p>
            <p><Mail/> Post@hairways.no</p>
            <p><MapIcon/> Sartorveien 10, 5353 Straume</p>
      </div>
      <Form class ="contact-form"/>
      </div>
   </Layout>
   
 );
}




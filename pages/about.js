import Head from "../components/layout/Head"
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL_ANSATTE} from "../constants/api";
import Image from "next/image";

export default function About(props) {
 
  console.log(props);

  return (
    <Layout>
      <Head title="Next Intro" />
      <div className="about">
        <Image src ="/Hairdesser1.jpeg" 
        width="2000" 
        height="1333" 
        alt="Image of hairways As locals"
        priority></Image>
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
      </div>
    </Layout>
  );
}

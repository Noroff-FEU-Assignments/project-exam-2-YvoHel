import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginIcon from "../icons/_login-icon"


export default function Layout({children}) {
	
  const [auth, setAuth] = useContext(AuthContext);

	function logout() {
		setAuth(null);
  }

 return (
  <>
    {auth ? (
  <nav class="navbar navbar-expand-lg bg-light" role="navigation">
  <div class="container-fluid">
  <Image src= "/logo_white.png" width="400" height="100" alt="My image"/>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button><div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav">
                   <li class="nav-item"> 
                   <Link href="/services-admin"><a class="nav-link" id="nav-link">Services</a></Link>
                   </li>
                   <li class="nav-item">
                   <Link href="/employes-admin"><a class="nav-link" id="nav-link">Employes</a></Link>
                   </li>
                   <li class="nav-item" id="login-icon">
                   <Link href="/"><a onClick={logout} class="nav-link" id="nav-link" ><LoginIcon/></a></Link>
                   </li>
                 </ul>
               </div>
  </div>
</nav>
			) : (
  <nav class="navbar navbar-expand-lg bg-light" role="navigation">
  <div class="container-fluid">
  <Image src= "/logo_white.png" width="400" height="100" alt="My image"/>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button><div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav">
                   <li class="nav-item"> 
                     <Link href="/"><a class="activ" id="nav-link" aria-current="page">Home</a></Link>
                   </li>
                   <li class="nav-item">
                     <Link href="www.hairways.no"><a id="nav-link">Bestill time</a></Link>
                   </li>
                   <li class="nav-item">
                     <Link href="/services"><a id="nav-link">Behandlinger</a></Link>
                   </li>
                   <li class="nav-item">
                     <Link href="/about"><a id="nav-link">Om oss</a></Link>
                   </li>
                   <li class="nav-item">
                     <Link href="/contact"><a id="nav-link">Kontakt</a></Link>
                   </li>
                   <li class="nav-item" id="login-icon">
                     <Link href="/login"><a id="nav-link" class="login-icon"><LoginIcon/></a></Link>
                   </li>
                 </ul>
               </div>
  </div>
</nav>
)}
<div>{children}</div>
<footer>
  <p>© 2022 Hairways AS</p>  
  <p>Laget av Yvonne Helander</p> 
</footer>
  </>
 );
}
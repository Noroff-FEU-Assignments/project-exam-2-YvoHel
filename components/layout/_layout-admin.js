import Link from "next/link";
import Image from "next/image";

export default function LayoutAdmin({ children }) {
 return (
  <>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid" id="navbar-admin">
  <Image src= "/logo_white.png" width="400" height="100" alt="My image" id="logo"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" id="navbarNav-admin">
        <li class="nav-item">
          <Link href="/messages-admin"><a class="activ" id="nav-link" aria-current="page">Meldinger</a></Link>
        </li>
        <li class="nav-item">
          <Link href="/services-admin"><a id="nav-link" >Behandlinger</a></Link>
        </li>
        <li class="nav-item">
        <Link href="/employes-admin"><a id="nav-link" >Ansatte</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="content">{children}</div>
<footer>
  <p>© 2022 Hairways AS</p>  
  <p>Laget av Yvonne Helander</p> 
</footer>
  </>
 );
}
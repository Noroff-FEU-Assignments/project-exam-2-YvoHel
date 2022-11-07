import Link from "next/link";

export default function Layout({ children }) {
 return (
  <>
  <nav>
    <Link href="/">
     <a>Hjem</a>
    </Link>
    <Link href="www.hairways.no">
     <a>Bestill time</a>
    </Link>
    <Link href="/services">
     <a>Behandlinger</a>
    </Link>
    <Link href="/about">
     <a>Om oss</a>
    </Link>
    <Link href="/contact">
     <a>Kontakt</a>
    </Link>
   </nav>

   <div className="container">{children}</div>
  </>
 );
}
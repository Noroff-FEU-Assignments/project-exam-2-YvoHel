import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginIcon from "../icons/LoginIcon"
import ActiveLink from "./ActiveLink";

export default function Layout({ children }) {
	const [auth, setAuth] = useContext(AuthContext);

	function logout() {
		setAuth(null);
	}
	
	return (
		<>
    {auth ? (
        <nav className="navbar navbar-expand-lg bg-light" role="navigation">
            <div className="container-fluid">
                <Image
                    src="/logo_white.png"
                    width="400"
                    height="100"
                    alt="My image"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link legacyBehavior href="/services-admin">
                                <a className="nav-link" id="nav-link">
                                    Services
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/employes-admin">
                                <a className="nav-link" id="nav-link">
                                    Employes
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" id="login-icon">
                            <Link legacyBehavior href="/">
                                <a onClick={logout} id="nav-link" className="login-icon">
                                    <LoginIcon />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ) : (
        <nav className="navbar navbar-expand-lg bg-light" role="navigation">
            <div className="container-fluid">
                <Image
                    src="/logo_white.png"
                    width="400"
                    height="100"
                    alt="My image"
                />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <ActiveLink activeClassName="active"legacyBehavior href="/">
                                <a  id="nav-link" aria-current="page">
                                    Home
                                </a>
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                                <a id="nav-link" href ="https://www.ledigtime.no/hairways/step1">Bestill time</a>
                        </li>
                        <li className="nav-item">
                            <ActiveLink activeClassName="active" legacyBehavior href="/services">
                                <a id="nav-link">Behandlinger</a>
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink activeClassName="active" legacyBehavior href="/about">
                                <a id="nav-link">Om oss</a>
                            </ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink activeClassName="active" legacyBehavior href="/contact">
                                <a id="nav-link">Kontakt</a>
                            </ActiveLink>
                        </li>
                        <li className="nav-item" id="login-icon">
                            <Link legacyBehavior href="/login">
                                <a id="nav-link" className="login-icon">
                                    <LoginIcon />
                                </a>
                            </Link>
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

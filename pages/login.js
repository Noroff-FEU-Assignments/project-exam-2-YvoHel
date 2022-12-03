import Head from "next/head";
import Layout from "../components/layout/_layout";
import LoginForm from "../components/form/_login-form";

export default function Login() {
	return (
		<Layout>
			<Head>
				<title>Login</title>
			</Head>
			<LoginForm />
		</Layout>
	);
}

import Head from "next/head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/form/LoginForm";

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

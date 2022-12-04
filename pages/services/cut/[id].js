import Layout from "../../../components/layout/Layout";
import Head from "../../../components/layout/Head";
import { BASE_URL_KLIPP } from "../../../constants/api";
import Link from "next/link";

export default function Cut({ cut }) {
	return (
		<Layout>
			<Head title={cut.title.rendered} />
			<div className="service-background">
				<div className="service-info">
					<h2>{cut.title.rendered}</h2>
					<p>{cut.excerpt.rendered}</p>
					<Link Link legacyBehavior href="/services">
						<button>Lukk </button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const response = await fetch(BASE_URL_KLIPP);
	const cuts = await response.json();

	const paths = cuts.map((cut) => ({
		params: { id: cut.id.toString() },
	}));

	console.log(paths);

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`
	);
	const cut = await res.json();

	return {
		props: { cut: cut },
	};
}

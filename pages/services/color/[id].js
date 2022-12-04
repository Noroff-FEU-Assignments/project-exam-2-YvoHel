import Layout from "../../../components/layout/Layout";
import Head from "../../../components/layout/Layout";
import { BASE_URL_FARGE } from "../../../constants/api";
import Link from "next/link";

export default function Color({ color }) {
	return (
		<Layout>
			<Head title={color.title.rendered} />
			<div className="service-background">
				<div className="service-info">
					<h2>{color.title.rendered}</h2>
					<p>{color.excerpt.rendered}</p>
					<Link href="/services">
						<button>Lukk </button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const response = await fetch(BASE_URL_FARGE);
	const colors = await response.json();

	console.log(colors);

	const paths = colors.map((color) => ({
		params: { id: color.id.toString() },
	}));

	console.log(paths);

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://hairways.yvonnehelander.info/wp-json/wp/v2/posts/${params.id}`
	);
	const color = await res.json();

	return {
		props: { color: color },
	};
}

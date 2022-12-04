import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import { useRouter } from "next/router";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddTreatment() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const router = useRouter();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		console.log(data);

		try {
			const response = await http.post("/wp/v2/posts?categories=6", data);
			console.log("response", response.data);
			router.push("/services-admin");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<Layout>
			<Head />
			<div className="edit-delete">
				<h1>Legg til Behandling</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<fieldset disabled={submitting}>
						<div className="form-group">
							<input
								name="title"
								placeholder="Title"
								{...register("title", { required: true })}
							/>
						</div>

						<div className="form-group">
							<textarea
								name="content"
								placeholder="Content"
								{...register("content", { required: true })}
							/>
						</div>

						<button>{submitting ? "Legger til..." : "Legg til"}</button>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

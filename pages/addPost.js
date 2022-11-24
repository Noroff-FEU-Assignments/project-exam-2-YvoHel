import Head from "../components/layout/_head";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../hooks/_useAxios";
import MediaDropdown from "../components/about-section/_employes";


const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddPost() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
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
			const response = await http.post("/wp/v2/posts?categories=3", data);
			console.log("response", response.data);
			
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset disabled={submitting}>
					<div>
						<input name="title" placeholder="Title" {...register('title', { required: true })} />
					</div>

					<div>
						<textarea name="content" placeholder="Content" {...register('content', { required: true })} />
					</div>

					<div>
						<MediaDropdown />
					</div>
					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
		</>
	);
    }
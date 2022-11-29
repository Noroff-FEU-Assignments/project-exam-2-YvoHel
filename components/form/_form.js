

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";



const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
});

export default function AddEmploye() {
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
			const response = await fetch("https://hairways.yvonnehelander.info/wp-json/wp/v2/comments", {method: 'PUT',});
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
						<input name="name" placeholder="Name" {...register('name', { required: true })} />
					</div>
                    <div>
						<input name="email" placeholder="Email" {...register('email', { required: true })} />
					</div>

					<div>
						<textarea name="comment" placeholder="Comment" {...register('comment', { required: true })} />
					</div>

					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
		</>
	);
    }



 


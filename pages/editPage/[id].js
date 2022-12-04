import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import useAxios from "../../hooks/useAxios";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import ArrowLeft from "../../components/icons/ArrowLeft";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export async function getServerSideProps(context) {
	const { id } = context.query;
	console.log(`query id: ${id}`);
	return { props: { id } };
}

export default function EditPost(props) {
	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);
	const [error, setError] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();

	const url = `wp/v2/posts/${props.id}`;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPost(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading post</div>;

	async function handleDelete() {
		try {
			await http.delete(url);
		} catch (error) {
			setError(error);
		}
	}

	return (
		<Layout>
			<Head content="Edit Post" />
			<div className="edit-delete">
				<h1>
					<Link legacyBehavior  href="/employes-admin">
						<a>
							<ArrowLeft />
						</a>
					</Link>
					Rediger Ansatt
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{updated && <div className="success">The post was updated</div>}

					<fieldset disabled={updatingPost}>
						<div class="form-group">
							<input
								name="title"
								defaultValue={post.title.rendered}
								placeholder="Title"
								{...register("title", { required: true })}
							/>
						</div>

						<div class="form-group">
							<input
								name="content"
								defaultValue={post.content.rendered}
								placeholder="Content"
								{...register("content", { required: true })}
							/>
						</div>

						<button>Update</button>
						<button type="button" className="delete" onClick={handleDelete}>
							{error ? "Error" : "Delete"}
						</button>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

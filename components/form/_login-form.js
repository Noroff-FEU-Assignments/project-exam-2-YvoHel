
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/_form-error";
import { BASE_URL, TOKEN_PATH } from "../../constants/api"

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});



export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
		} catch (error) {
			console.log("error", error);
			alert('Bad username or password')
		} finally {
			setSubmitting(false);
		}
	}

    return (
        <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={submitting}>
                <div className="form-group">
                    <label>Username</label>
                    <input name="username" placeholder="Username" {...register('username', { required: true })} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" placeholder="Password" {...register('password', { required: true })} type="password" />
                        </div>
                        <button>{submitting ? "Loggin in..." : "Login"}</button>
                </fieldset>
            </form>
        </div>
    </div>
      
    );
   }
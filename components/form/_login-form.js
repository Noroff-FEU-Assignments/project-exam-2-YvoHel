import Link from "next/link";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../constants/api"
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";


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

    const [auth, setAuth] = useContext(AuthContext);
    
    const router = useRouter();
	
    async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);
        
		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
            router.push("/admin");
            
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
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
                        <button>{submitting ? "Loggin in..." : "Login" }</button>
                </fieldset>
            </form>
        </div>
    </div>
      
    );
    }
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/_useAxios";
import React from "react";  



export default function EmployeList({ register }) {
	const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/posts?categories=3");
				console.log("response", response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}finally {
				setLoading(false);
			}
		}
        
        getMedia();


		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;

    

    return (
		<ul className="posts">
			{media.map((media) => {
				return (
					<div key={media.id}>
						{media.title.rendered}
                        <button>Delete</button>  
					</div>
				);
			})}
		</ul>
	);

}


EmployeList.propTypes = {
	register: PropTypes.func,
};

EmployeList.defaultProps = {
	register: () => {},
};

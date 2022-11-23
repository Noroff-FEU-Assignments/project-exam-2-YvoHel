import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/_useAxios";


export default function MediaDropdown({ register }) {
	const [media, setMedia] = useState([]);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/posts?categories=3");
				console.log("response", response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
        <>
			{media.map((media) => {
				return (
					<option key={media.id} value={media.id}>
						{media.title.rendered}
					</option>
				);
			})}
        </>
	);
}

MediaDropdown.propTypes = {
	register: PropTypes.func,
};

MediaDropdown.defaultProps = {
	register: () => {},
}; 
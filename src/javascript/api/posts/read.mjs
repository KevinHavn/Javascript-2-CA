import { API_SOCIAL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const author = "?_author=true";

export async function getPosts() {
	const getPostsURL = `${API_SOCIAL}${action}${author}`;

	const response = await authFetch(getPostsURL);

	return await response.json();
}



export async function getPost() {


	if (!id) {
		throw new Error("Getting post requires a postID");
	}

	const getPostURL = `${API_SOCIAL}${action}/${id}`;

	const response = await authFetch(getPostURL);

	console.log(post);
	return await response.json();
}

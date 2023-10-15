import { authFetch } from "../api/posts/authFetch.mjs";

const action = "/posts";

export async function createPost(postData) {
	const createPostURL = API_SOCIAL + action;

	const response = await authFetch(createPostURL, {
		body: JSON.stringify(postData),
	});

	const post = await response.json();
	console.log(post);
}

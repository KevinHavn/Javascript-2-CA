import { API_SOCIAL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./index.mjs";
import { load } from "../storage/index.mjs";

const profile = load("profile");

const action = "/posts";
const method = "post";

export async function createPost(postData) {
	const createPostURL = API_SOCIAL + action;
	const response = await authFetch(createPostURL, {
		method,
		body: JSON.stringify(postData),
	});

	return await response.json();
}

export async function createPosts() {
	const posts = await postMethods.getPosts();
	const container = document.querySelector("#post");
	templates.renderPostTemplates(posts, container);
	console.log(posts);
	console.log(profile);
}

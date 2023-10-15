import * as listeners from "./handlers/index.mjs";
import { createPosts } from "./api/posts/create.mjs";
import { getPost } from "./api/posts/read.mjs";

const path = location.pathname;

if (path === "/index.html") {
	listeners.setRegisterFormListener();
	listeners.setLoginFormListener();
} else if (path === "/feed.html") {
	createPosts();
	listeners.setCreatePostFormListener();
} else if (path === "/post.html") {
	listeners.setUpdatePostListener();
	console.log(getPost)
	getPost()
}

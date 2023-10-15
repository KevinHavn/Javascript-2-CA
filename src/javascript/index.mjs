import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./api/posts/templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplate } from "./api/posts/templates/index.mjs";

const path = location.pathname;

if (path === "/index.html") {
	setRegisterFormListener();
	setLoginFormListener();
}

async function testTemplate() {
	const posts = await postMethods.getPosts();
	const post = posts.pop();
	const container = document.querySelector("#post");
	renderPostTemplate(post, container);
}

testTemplate();

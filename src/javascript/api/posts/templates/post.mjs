


export function postTemplate(postData) {

	const post = document.createElement("div");

	const postTitle = document.createElement("h2");
	postTitle.innerText = postData.title;
	post.append(postTitle);

    const postBody = document.createElement("p")
    postBody.innerText = postData.body;
    post.append(postBody)

    return post;
}

export function renderPostTemplate(postData, parent) {
	parent.append(postTemplate(postData))
}
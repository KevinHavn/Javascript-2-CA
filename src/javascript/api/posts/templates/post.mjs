import { load } from "../../storage/index.mjs";

const profile = load("profile");

export function postTemplate(postData) {
	const post = document.createElement("div");
	post.classList.add(
		"d-flex",
		"row",
		"bg-primary-subtle",
		"m-4",
		"card",
		"col-md-9"
	);
	post.id = postData.id;
	const postHeader = document.createElement("header");
	post.append(postHeader);

	const postTitle = document.createElement("h2");
	postTitle.innerText = postData.title;
	postHeader.append(postTitle);

	const postBodyDiv = document.createElement("div");
	postBodyDiv.classList.add(
		"d-flex",
		"flex-direction-row",
		"justify-content-around",
		"align-content-center"
	);
	post.append(postBodyDiv);

	const postBody = document.createElement("p");
	postBody.innerText = postData.body;
	postBodyDiv.append(postBody);

	if (postData.media && postData.media.trim() !== "") {
		const postMedia = document.createElement("img");
		postMedia.src = postData.media;
		postMedia.classList.add("w-50");
		postMedia.alt = "Post media";
		postBodyDiv.append(postMedia);
	}

	const postFooter = document.createElement("footer");
	postFooter.classList.add("d-flex", "flex-column");
	post.append(postFooter);

	const postMetaData = document.createElement("div");
	postMetaData.classList.add("d-flex", "justify-content-between");
	postFooter.append(postMetaData);

	const authorDetails = document.createElement("div");
	authorDetails.classList.add("d-flex", "flex-column", "flex-row");
	postMetaData.append(authorDetails);

	const postAuthor = document.createElement("p");
	postAuthor.innerText = "Posted by " + postData.author.name;
	authorDetails.append(postAuthor);

	const postDate = document.createElement("p");
	postDate.innerText = "Posted " + postData.created;
	postMetaData.append(postDate);

	const controlPanel = document.createElement("div");
	controlPanel.classList.add("d-flex", "flex-row", "justify-content-between");
	postFooter.append(controlPanel);

	const details = document.createElement("a");
	details.classList.add("btn", "btn-info", "my-3");
	details.setAttribute("id", postData.id);
	details.innerText = "Post Details";
	details.setAttribute("href", "post.html" + "?id=" + postData.id);
	details.type = "submit";
	controlPanel.append(details);

	if (postData.author.name == profile.name) {
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("btn", "btn-danger", "my-3");
		deleteButton.innerText = "Delete Post";
		deleteButton.setAttribute("id",postData.id)
		controlPanel.append(deleteButton);
	}

	return post;
}

export function renderPostTemplate(postData, parent) {
	parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
	parent.append(...postDataList.map(postTemplate));
}

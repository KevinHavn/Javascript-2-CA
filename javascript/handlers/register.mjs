import { register } from "../api/auth/register.mjs";
const form = document.querySelector("#registerForm");

export function setRegisterFormListener() {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const profile = Object.fromEntries(formData.entries());


        register(profile)

	});
}

<!-- Aurelius Ivan Wijaya 2024 -->
<!-- Home Page for the apps -->
<script lang="ts">
	// fetch api with axios
	import axios from 'axios';
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await axios
			.get('https://database.ivann.my.id/api/post/get')
			.then((res) => {
				console.log(res);
				return res;
			})
			.catch((err) => {
				console.log(err);
			});
		const data = res?.data.data;
		console.log(data);
		const section = document.querySelector('section');
		if (!section) return;
		section.innerHTML = data
			?.map((post: any) => {
				console.log(post);
				return `
				<article class="
				container mx-auto border-2 border-gray-200 rounded-lg p-4 m-4">
					<h2 class="text-xl font-bold">${post.title}</h2>
					<p>${post.slug}</p>
					<img src="${post.thumbnail}" alt="${post.title}" class="w-full h-64 object-cover" />
				</article>
			`;
			})
			.join('');
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="container mx-auto flex h-fit flex-col items-center justify-center">
	<h1 class="text-center text-4xl font-bold">Wanna see a magic trick?</h1>
	<button class="mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
		Click me
	</button>
	<section
		class="mt-8 flex
	h-full w-full flex-col
	"
	></section>
</main>

<style>
	/* Additional styles for customization (optional) */
</style>

<!-- Aurelius Ivan Wijaya 2024 -->
<!-- Home Page for the apps -->

<script>
	// log on load
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const count = writable(0);
	// count.subscribe((value) => {
	// 	console.log('Count:', value);
	// });
	count.set(1);
	count.update((value) => value + 1);

	let visible = true;
	const duration = 1;

	// @ts-ignore
	function tweenIn(node) {
		let tl = gsap.timeline();

		tl.from(node, {
			duration,
			opacity: 0
		}).from(
			'.box',
			{
				duration,
				xPercent: 100,
				rotation: -90,
				yPercent: 100,
				ease: 'bounce.out'
			},
			`-=${duration * 0.75}`
		);

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
			// @ts-ignore
			tick: (t) => {
				tl.progress(t);
			}
		};
	}

	// @ts-ignore
	function tweenOut(node) {
		let tl = gsap.timeline();

		tl.to(node, {
			duration,
			yPercent: 100,
			ease: 'back.in'
		}).to(
			'.box',
			{
				duration: duration * 0.25,
				opacity: 0
			},
			`-=${duration * 0.25}`
		);

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
			// @ts-ignore
			tick: (t, u) => {
				tl.progress(u);
			}
		};
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="container mx-auto flex h-screen flex-col items-center justify-center">
	<h1 class="mt-8 text-center text-8xl font-bold">Welcome to Your Brand</h1>
	<p class="mt-4 text-center">We are here to help you grow your business</p>

	<section>
		<button
			class="mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			on:click={() => count.update((value) => value + 1)}
		>
			Click me
		</button>
		<p class="mt-4 text-center">Count: {$count}</p>

		<!--  -->
		<label>
			<input type="checkbox" bind:checked={visible} />
			visible
		</label>

		{#if visible}
			<div class="box h-32 w-32 bg-blue-500" in:tweenIn out:tweenOut></div>
		{/if}
	</section>
</main>

<style>
	/* Additional styles for customization (optional) */
</style>

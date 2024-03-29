<script>
	import { onMount } from 'svelte';
	let isMenuOpen = false;

	onMount(() => {
		const handleResize = () => {
			isMenuOpen = window.innerWidth > 768; // Adjust breakpoint as needed
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav
	class="sticky left-0 top-0 z-50 w-full
  border-b-[1px] border-secondary border-opacity-30 bg-primary p-2"
>
	<div class="container mx-auto flex items-center justify-between px-4 py-2">
		<a href="/" class="text-xl font-bold">Ivan</a>
		<button type="button" class="focus:outline-none md:hidden" on:click={toggleMenu}>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4 6H20M4 12H20M4 18H11M13 18H20"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<ul class="hidden flex-col text-center md:flex md:flex-row md:space-x-8">
			<li><a href="/" class="hover:text-gray-400">Home</a></li>
			<li><a href="/showcase" class="hover:text-gray-400">Showcase</a></li>
			<li><a href="/contact" class="hover:text-gray-400">Contact us!</a></li>
		</ul>
	</div>

	<div class="md:hidden">
		<ul
			class={`absolute mt-2 w-full bg-gray-800 py-4 text-center transition duration-200 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
		>
			<li><a href="/" class="block px-4 py-2 hover:bg-gray-700">Home</a></li>
			<li><a href="/" class="block px-4 py-2 hover:bg-gray-700">About</a></li>
			<li><a href="/" class="block px-4 py-2 hover:bg-gray-700">Services</a></li>
			<li><a href="/" class="block px-4 py-2 hover:bg-gray-700">Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	/* Additional styles for customization (optional) */
</style>

<script>
	import '../app.pcss';
	import '../app.scss';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header>
		<slot name="header" />
	</Header>
	<main class="p-4">
		<slot />
	</main>

	<Footer>
		<slot name="footer" />
	</Footer>
</div>

<style>
</style>

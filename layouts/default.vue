<template>
	<div class="bg-light-bg200 font-montserrat dark:bg-dark-bg100">
		<Header />
		<slot />

		<Footer />
	</div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'
export default {
	components: {
		Header,
		Footer,
	},
}
</script>

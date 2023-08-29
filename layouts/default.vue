<template>
    <div class="bg-light-bg200 dark:bg-dark-bg100">
        <Header />
        <slot />

        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>
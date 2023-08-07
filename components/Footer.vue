<template>
    <div>
        footer del component. {{ currentYear }}
    </div>
</template>

<script setup>
    const currentYear = new Date().getUTCFullYear()
</script>
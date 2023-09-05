<template>
	<div
		class="flex min-h-screen flex-col bg-light-bg200 font-montserrat dark:bg-dark-bg100">
		<HeaderCustom />
		<slot class="grow" />
		<Footer />
	</div>
</template>

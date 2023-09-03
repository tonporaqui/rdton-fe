<template>
	<div
		class="font-montserrat bg-light-bg200 dark:bg-dark-bg100 flex flex-col min-h-screen">
		<HeaderCustom />
		<slot class="flex-grow" />
		<Footer />
	</div>
</template>

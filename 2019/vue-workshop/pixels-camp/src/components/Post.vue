<template>
	<div @click="$emit('click')" class="post">
		<h1> {{ title }} </h1>
		<p v-if="body"> {{ body }} </p>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
				//validator (value) {
			    //  return value > 0
				//}
			},
			body: {
				type: String,
				required: false,
				default: ''
			}

		}
	}
</script>

<style>

</style>

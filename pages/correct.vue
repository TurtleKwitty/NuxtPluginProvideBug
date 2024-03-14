<template>
	<div>
		<p>$data is: {{ $data === null ? "null" : $data }}</p>
		<p v-if="$data">True</p>
		<p v-else>False</p>
	</div>
</template>

<script setup>
const { $data } = useNuxtApp();
</script>

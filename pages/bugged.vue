<template>
	<div>
		<p>$data is: {{ $data === undefined ? "undefined" : $data }}</p>
		<p v-if="$data">True</p>
		<p v-else>False</p>
	</div>
</template>

<script>
</script>

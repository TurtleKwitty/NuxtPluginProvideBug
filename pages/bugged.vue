<template>
	<div>
		<p>$data is: {{ $data === undefined ? "undefined" : $data }}</p>
		<p v-if="$data">True</p>
		<p v-else>False</p>
		<p>Workaround:</p>
		<p>$data is: {{ $data.value === undefined ? "undefined" : $data.value }}</p>
		<p v-if="$data.value">True</p>
		<p v-else>False</p>
	</div>
</template>

<script>
</script>

<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import ForestRoad from './ForestRoad.svelte';
</script>

<div class="scene-container">
	<Canvas>		
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={60}>
			<OrbitControls enableDamping />
		</T.PerspectiveCamera>

		<T.DirectionalLight intensity={0.8} position={[5, 10, 5]} />
		<T.AmbientLight intensity={0.2} />

		<ForestRoad />
	</Canvas>
</div>

<style>
	.scene-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 0;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
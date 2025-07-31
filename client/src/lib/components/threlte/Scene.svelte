<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import ForestRoad from './ForestRoad.svelte';
	import Camera from './Camera.svelte';
	import Character from './Character.svelte';
	import Sky from './Sky.svelte';
</script>

<div class="scene-container">
	<Canvas shadows>		
		<Camera />
		
		<!-- Sky/Environment -->
		<Sky />

		<T.DirectionalLight 
			intensity={1.2} 
			position={[5, 20, 10]} 
			castShadow
			shadow.camera.left={-20}
			shadow.camera.right={20}
			shadow.camera.top={20}
			shadow.camera.bottom={-20}
			shadow.camera.near={0.1}
			shadow.camera.far={50}
			shadow.mapSize.width={2048}
			shadow.mapSize.height={2048}
			shadow.bias={-0.0005}
		/>

		<ForestRoad />
		<Character />
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
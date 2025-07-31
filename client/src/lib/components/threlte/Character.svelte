<script lang="ts">
	import { GLTF, useGltfAnimations } from '@threlte/extras';
	import { T } from '@threlte/core';
	
	// Load GLTF model with animations
	let { gltf, actions } = useGltfAnimations();
	
	// Initialize and play walk animation
	$effect(() => {
		if (!$actions) return;
		
		// Get the walk action
		const walkAction = $actions['walk'];
		if (walkAction) {
			// Enable and play the walk animation
			walkAction.enabled = true;
			walkAction.play();
			// Set to loop
			walkAction.loop = true;
		}
	});
</script>

<!-- Character model positioned at origin -->
<T.Group position={[0, 0.1, 0]} scale={0.7}>
	<GLTF
		bind:gltf={$gltf}
		url="https://threejs.org/examples/models/gltf/Xbot.glb"
		castShadow
		receiveShadow
	/>
</T.Group>
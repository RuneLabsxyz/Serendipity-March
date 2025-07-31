<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { cameraMode, cameraConfigs } from '$lib/stores/camera';
	import { spring } from 'svelte/motion';
	import { derived } from 'svelte/store';
	
	// Get current camera configuration based on mode
	$: targetConfig = cameraConfigs[$cameraMode];
	
	// Create spring stores for smooth transitions
	const position = spring([0, 2, -5], {
		stiffness: 0.05,
		damping: 0.9
	});
	
	const rotation = spring([0.2, Math.PI, 0], {
		stiffness: 0.05,
		damping: 0.9
	});
	
	const fov = spring(60, {
		stiffness: 0.05,
		damping: 0.9
	});
	
	// Update springs when camera mode changes
	$: if (targetConfig) {
		position.set(targetConfig.position);
		rotation.set(targetConfig.rotation);
		fov.set(targetConfig.fov);
	}
</script>

<T.PerspectiveCamera 
	makeDefault 
	position={$position}
	rotation={$rotation}
	fov={$fov}
/>
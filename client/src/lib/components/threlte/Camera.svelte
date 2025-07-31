<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { cameraMode, cameraConfigs } from '$lib/stores/camera';
	
	// Get the current camera mode from store
	const mode = $derived.by(() => $cameraMode);
	
	// Get current camera configuration based on mode
	const targetConfig = $derived.by(() => cameraConfigs[mode]);
	
	// Initialize with classic config
	const initialConfig = cameraConfigs.classic;
	
	// State for smooth transitions
	let currentPosition = $state<[number, number, number]>([...initialConfig.position]);
	let currentRotation = $state<[number, number, number]>([...initialConfig.rotation]);
	let currentFov = $state(initialConfig.fov);
	
	// Transition speed
	const TRANSITION_SPEED = 3;
	
	// Smooth interpolation using useTask
	useTask((delta) => {
		if (!targetConfig) return;
		
		const factor = Math.min(TRANSITION_SPEED * delta, 1);
		
		// Interpolate position
		currentPosition = [
			currentPosition[0] + (targetConfig.position[0] - currentPosition[0]) * factor,
			currentPosition[1] + (targetConfig.position[1] - currentPosition[1]) * factor,
			currentPosition[2] + (targetConfig.position[2] - currentPosition[2]) * factor
		];
		
		// Interpolate rotation
		currentRotation = [
			currentRotation[0] + (targetConfig.rotation[0] - currentRotation[0]) * factor,
			currentRotation[1] + (targetConfig.rotation[1] - currentRotation[1]) * factor,
			currentRotation[2] + (targetConfig.rotation[2] - currentRotation[2]) * factor
		];
		
		// Interpolate FOV
		currentFov = currentFov + (targetConfig.fov - currentFov) * factor;
	});
</script>

<T.PerspectiveCamera 
	makeDefault 
	position={currentPosition}
	rotation={currentRotation}
	fov={currentFov}
/>
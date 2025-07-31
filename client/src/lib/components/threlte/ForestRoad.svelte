<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import ForestRoad from './glb/forest_road.svelte';
	
	// Configuration
	const ROAD_LENGTH = 16; // Length of each road segment at scale 4
	const NUM_SEGMENTS = 7; // Number of road segments to maintain (increased from 5 to 7)
	const MOVE_SPEED = 1; // Units per second
	
	// Track positions of road segments - now includes 2 pieces behind camera
	let roadPositions = $state(
		Array.from({ length: NUM_SEGMENTS }, (_, i) => (i - 2) * ROAD_LENGTH)
	);
	
	// Animation loop
	useTask((delta) => {
		// Update all road positions
		roadPositions = roadPositions.map(pos => {
			let newPos = pos - MOVE_SPEED * delta;
			
			// If road segment has moved completely behind camera, wrap it to the front
			if (newPos < -ROAD_LENGTH) {
				// Find the furthest road position and place this segment after it
				const maxPos = Math.max(...roadPositions);
				newPos = maxPos + ROAD_LENGTH;
			}
			
			return newPos;
		});
	});
</script>

<T.Group position={[0, 0, 0]}>
	{#each roadPositions as zPos, i (i)}
		<ForestRoad scale={4} position={[0, 0, zPos]} />
	{/each}
</T.Group>
<script lang="ts">
	import { T } from '@threlte/core';

	import ForestRoad from './glb/forest_road.svelte';
</script>

<T.Group position={[0, 0, 0]}>

	<ForestRoad scale={4} position={[0, 0, 16]} />
	<ForestRoad scale={4} />

</T.Group>
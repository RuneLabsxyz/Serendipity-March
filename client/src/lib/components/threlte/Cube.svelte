<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';

	let rotation = $state({ x: 0, y: 0, z: 0 });
</script>

<T.Group>
	<T.Mesh rotation={[rotation.x, rotation.y, rotation.z]}>
		<T.BoxGeometry args={[2, 2, 2]} />
		<T.MeshStandardMaterial color="#ff6b6b" />
	</T.Mesh>

	<T.Mesh position={[5, 0, 0]}>
		<T.SphereGeometry args={[1, 32, 32]} />
		<T.MeshStandardMaterial color="#4ecdc4" />
	</T.Mesh>

	<T.Mesh position={[-5, 0, 0]}>
		<T.ConeGeometry args={[1, 2, 32]} />
		<T.MeshStandardMaterial color="#f7b731" />
	</T.Mesh>
</T.Group>
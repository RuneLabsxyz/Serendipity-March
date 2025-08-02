<script lang="ts">
	import { T } from '@threlte/core';
	import Walking from './glb/walking.svelte';
	import { LoopRepeat } from 'three';
	
	let walkingInstance: any;
	
	// Play animations when the Walking component is ready
	$effect(() => {
		if (!walkingInstance) return;
		
		// Subscribe to the actions store
		const unsubscribe = walkingInstance.actions.subscribe((actions: any) => {
			if (!actions) return;
			
			// Play all available animations
			Object.values(actions).forEach((action: any) => {
				if (action && !action.isRunning()) {
					action.setLoop(LoopRepeat, Infinity);
					action.play();
				}
			});
		});
		
		return unsubscribe;
	});
</script>

<!-- Character model positioned at origin -->
<T.Group position={[0, 0.1, 0]} scale={0.7}>
	<Walking bind:this={walkingInstance}>
		{#snippet fallback()}
			<!-- Loading... -->
		{/snippet}
		{#snippet error({ error })}
			<T.Mesh>
				<T.BoxGeometry />
				<T.MeshBasicMaterial color="red" />
			</T.Mesh>
		{/snippet}
		{#snippet children({ ref })}
			{#if ref}
				{@const _ = (() => {
					// Enable shadows on all meshes
					ref.traverse((child: any) => {
						if (child.isMesh) {
							child.castShadow = true;
							child.receiveShadow = true;
						}
					});
				})()}
			{/if}
		{/snippet}
	</Walking>
</T.Group>
import { writable } from 'svelte/store';

export type CameraMode = 'login' | 'classic' | 'edit';

export interface CameraConfig {
	position: [number, number, number];
	rotation: [number, number, number];
	fov: number;
}

export const cameraConfigs: Record<CameraMode, CameraConfig> = {
	// Classic view - car-like perspective moving forward
	classic: {
		position: [0, 2, -5],
		rotation: [0.2, Math.PI, 0],
		fov: 60
	},
	
	// Edit view - top-down for army overview
	edit: {
		position: [0, 100, 0],
		rotation: [Math.PI / 2, Math.PI, 0], // Looking straight down
		fov: 50
	},
	
	// Login view - cinematic side angle
	login: {
		position: [10, 3, -2], // Side position, slightly forward
		rotation: [0, Math.PI * 0.85, 0], // Looking back at an angle
		fov: 65
	}
};

export const cameraMode = writable<CameraMode>('classic');
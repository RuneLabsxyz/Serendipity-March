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
		position: [0, 10, 0],
		rotation: [Math.PI / 2, Math.PI, 0], // Looking straight down
		fov: 50
	},
	
	// Login view - cinematic side angle
	login: {
		position: [0.6, 0.6, 0.6],
		rotation: [-1, Math.PI / 4, 1], // Looking back at an angle
		fov: 100
	}
};

export const cameraMode = writable<CameraMode>('login');
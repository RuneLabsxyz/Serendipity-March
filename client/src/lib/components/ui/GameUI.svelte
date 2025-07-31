<script lang="ts">
	let score = 0;
	let health = 100;
</script>

<div class="ui-overlay">
	<div class="top-bar">
		<div class="stats">
			<div class="stat-item">
				<span class="label">Score:</span>
				<span class="value">{score}</span>
			</div>
			<div class="stat-item">
				<span class="label">Health:</span>
				<span class="value">{health}%</span>
			</div>
		</div>
	</div>

	<div class="bottom-controls">
		<button on:click={() => score += 10}>Add Score</button>
		<button on:click={() => health = Math.max(0, health - 10)}>Take Damage</button>
		<button on:click={() => health = 100}>Heal</button>
	</div>
</div>

<style>
	.ui-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 10;
	}

	.top-bar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 20px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
		pointer-events: auto;
	}

	.stats {
		display: flex;
		gap: 30px;
		color: white;
		font-family: monospace;
		font-size: 18px;
	}

	.stat-item {
		display: flex;
		gap: 10px;
	}

	.label {
		opacity: 0.8;
	}

	.value {
		font-weight: bold;
		color: #4ecdc4;
	}

	.bottom-controls {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 10px;
		pointer-events: auto;
	}

	button {
		padding: 10px 20px;
		background: rgba(0, 0, 0, 0.8);
		color: white;
		border: 2px solid #4ecdc4;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		transition: all 0.3s ease;
	}

	button:hover {
		background: #4ecdc4;
		color: black;
		transform: translateY(-2px);
	}

	button:active {
		transform: translateY(0);
	}
</style>
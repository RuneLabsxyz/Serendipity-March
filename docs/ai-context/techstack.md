# Serendipity March - Technical Stack Documentation

## Overview
Serendipity March is a fully on-chain 3D marching game built with modern web3 and 3D graphics technologies. The game combines provable game mechanics with immersive 3D visuals in a futuristic medieval setting.

## Core Technologies

### Frontend Framework
- **SvelteKit 2.x** - Full-stack web framework
  - Server-side rendering capabilities
  - File-based routing
  - TypeScript support out of the box
  - Vite for fast HMR and building

### 3D Graphics Stack
- **Threlte v8/v9** - Declarative 3D for Svelte
  - Svelte wrapper around Three.js
  - Component-based 3D scene composition
  - Reactive 3D properties
  - Built-in controls and helpers
- **Three.js v0.178** - Core 3D rendering engine
  - WebGL renderer
  - PBR materials support
  - GLTF/GLB model loading
  - Post-processing effects

### Blockchain Integration
- **Dojo Engine** - Provable game engine
  - **Cairo** - Smart contract language for StarkNet
  - On-chain game state management
  - Verifiable random number generation
  - Zero-knowledge proof capabilities
  - Entity Component System (ECS) architecture

### State Management
- **Svelte Stores** - For client-side state
- **Dojo State** - For on-chain game state synchronization
- **IndexedDB** - For local caching of game assets

### Development Tools
- **TypeScript** - Type safety across the stack
- **Vite** - Build tooling and dev server
- **Bun** - Fast JavaScript runtime and package manager
- **Nix Flakes** - Reproducible development environments

## Architecture Patterns

### Component Structure
```
client/
├── lib/
│   ├── components/
│   │   ├── threlte/      # 3D scene components
│   │   ├── ui/           # 2D UI overlays
│   │   └── game/         # Game logic components
│   ├── stores/           # Svelte stores
│   ├── dojo/            # Blockchain integration
│   └── utils/           # Helper functions
```

### 3D Scene Architecture
- **Scene Manager** - Root Threlte scene component
- **Camera System** - Top-down diagonal view controller
- **Army Renderer** - Instanced mesh rendering for units
- **Terrain System** - Procedural terrain generation
- **Effects Pipeline** - Post-processing for atmospheric effects

### Blockchain Architecture
- **Game Contracts** (Cairo)
  - Army management system
  - Unit upgrade mechanics
  - Item generation and drops
  - March progression tracking
- **Client Integration**
  - Wallet connection (StarkNet)
  - Transaction management
  - State synchronization
  - Event listeners

## Performance Considerations
- **Instanced Rendering** - For rendering thousands of units
- **LOD System** - Level of detail for distant armies
- **Frustum Culling** - Only render visible units
- **State Compression** - Efficient on-chain data storage
- **Lazy Loading** - Load assets as needed

## Development Workflow
1. **Local Development**
   - Run local StarkNet devnet
   - Deploy contracts with Dojo
   - Start SvelteKit dev server
   - Hot module replacement for rapid iteration

2. **Testing**
   - Unit tests for game logic
   - Integration tests for blockchain interactions
   - Visual regression tests for 3D scenes
   - Cairo contract testing

3. **Deployment**
   - Build optimized bundles
   - Deploy contracts to StarkNet
   - Host frontend on IPFS/Vercel
   - Configure CDN for assets

## Key Libraries and Dependencies
```json
{
  "dependencies": {
    "@threlte/core": "^8.1.3",
    "@threlte/extras": "^9.4.2",
    "three": "^0.178.0",
    "@dojoengine/core": "latest",
    "@dojoengine/state": "latest",
    "starknet": "latest"
  }
}
```

## Future Technical Considerations
- **WebGPU** support when Three.js adopts it
- **Mesh Streaming** for infinite world
- **P2P Networking** for multiplayer raids
- **IPFS Integration** for decentralized assets
- **zkML** for anti-cheat mechanisms
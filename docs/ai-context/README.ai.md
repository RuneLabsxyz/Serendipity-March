# Serendipity March - AI Context Documentation

## Project Overview

**Serendipity March** is a fully on-chain 3D marching game where players command armies in an eternal march across procedurally generated wastelands. The game combines the relentless atmosphere of Dune's Sardaukar with blockchain-powered game mechanics, creating a unique "march forever" experience.

## Core Concept

Players control armies from a top-down diagonal camera view, marching endlessly forward to collect items and grow stronger. The quality of loot drops scales with army power - the stronger your army, the better the items you find. It's an infinite progression game with a futuristic medieval aesthetic.

## Documentation Structure

This AI context is organized into specialized documents:

### 📚 [Technical Stack](./techstack.md)
Complete technical implementation details including:
- Frontend: SvelteKit + Threlte (Three.js)
- Blockchain: Dojo Engine with Cairo
- 3D rendering architecture
- Performance optimization strategies
- Development workflow

### 📖 [Lore & World Building](./lore.md)
The narrative foundation including:
- The Eternal March mythology
- Sardaukar-inspired factions
- Quantum wasteland setting
- Item manifestation lore
- Cultural elements and mysteries

### 🎨 [Visual Design](./design.md)
Comprehensive art direction covering:
- Futuristic medieval aesthetic
- Color palettes and visual hierarchy
- Unit and environment design
- Shader effects and particles
- UI/UX specifications

### 🎮 [Gameplay Mechanics](./gameplay.md)
Detailed game systems including:
- Core march mechanics
- Army management and formations
- Item generation algorithms
- Combat and progression systems
- Multiplayer and endgame content

## Quick Reference for Development

### Key Gameplay Features
- **Automatic marching** - Armies move forward continuously
- **Formation-based combat** - Strategic unit positioning
- **Dynamic loot system** - Item quality scales with army power
- **Fully on-chain** - All game state verified on blockchain
- **Infinite progression** - No level caps or endpoints

### Visual Style Keywords
- Oppressive, geometric, austere
- Sardaukar-inspired military aesthetic
- Quantum effects and glitch aesthetics
- Top-down diagonal camera (45° angle)
- Endless desert wastelands

### Technical Priorities
1. Smooth rendering of thousands of units (instanced meshes)
2. Efficient blockchain state synchronization
3. Responsive formation controls
4. Dynamic LOD system for performance
5. Procedural world generation

### Current Implementation Status
- ✅ Basic SvelteKit + Threlte setup
- ✅ 3D scene with forest road placeholder
- ✅ Basic UI components (score, health)
- ⏳ Dojo integration pending
- ⏳ Army unit system pending
- ⏳ March mechanics pending
- ⏳ Item system pending

## Development Guidelines

### When Adding Features
1. Check the relevant documentation file first
2. Maintain the futuristic medieval aesthetic
3. Ensure all game state changes are blockchain-compatible
4. Follow the established component structure
5. Consider performance impact of 3D elements

### Component Organization
```
client/lib/components/
├── threlte/          # 3D rendering components
│   ├── units/        # Army unit meshes
│   ├── terrain/      # World generation
│   ├── effects/      # Visual effects
│   └── camera/       # Camera controls
├── ui/               # 2D interface elements
│   ├── hud/          # In-game displays
│   ├── menus/        # Menu screens
│   └── modals/       # Popups and overlays
└── game/             # Game logic components
    ├── army/         # Army management
    ├── items/        # Item system
    └── blockchain/   # Dojo integration
```

### Blockchain Considerations
- All army positions stored on-chain
- Item drops use verifiable randomness
- Formation changes are transactions
- Unit upgrades require on-chain validation
- Player progression is immutable

## Key Design Decisions

1. **No Manual Movement** - Armies march automatically to emphasize the "eternal march" theme
2. **Top-Down View Only** - No camera rotation to maintain strategic clarity
3. **Indirect PvP** - Players encounter "echoes" of other armies, not real-time battles
4. **Quality Over Quantity** - Better to have fewer, high-quality units than many weak ones
5. **Provable Fairness** - All randomness and combat calculations verifiable on-chain

## Common Development Tasks

### Adding a New Unit Type
1. Define stats in `gameplay.md` spec
2. Create 3D model/mesh component
3. Add Cairo contract for unit data
4. Implement upgrade paths
5. Update formation system

### Creating Environmental Hazards
1. Design visual effect (see `design.md`)
2. Implement damage/bonus mechanics
3. Add to procedural generation
4. Create blockchain events
5. Update march algorithm

### Implementing Items
1. Design item properties and rarity
2. Create visual representation
3. Add Cairo structs for on-chain data
4. Implement drop algorithm
5. Add to inventory UI

## Questions This Documentation Answers

- **What is the game about?** → See Lore documentation
- **How does it look?** → See Design documentation  
- **How does it play?** → See Gameplay documentation
- **How is it built?** → See Technical Stack documentation
- **What's the current status?** → Check implementation status above

## AI Assistant Context

When working on this project, remember:
- The game should feel oppressive and relentless
- Every feature must work within blockchain constraints
- Performance is critical for rendering many units
- The Sardaukar/Dune aesthetic is core to the identity
- Marching forward is not optional - it's the entire game

Use these documents as your primary reference for maintaining consistency across all aspects of the game.
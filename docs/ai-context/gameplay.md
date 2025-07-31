# Serendipity March - Gameplay Documentation

## Core Gameplay Loop

### The Eternal March Cycle
1. **March** → Your army moves forward automatically
2. **Encounter** → Random events, items, or battles
3. **Collect** → Gather items based on army strength
4. **Upgrade** → Improve units with collected resources
5. **Organize** → Optimize army formation
6. **Repeat** → Continue marching stronger

## Game Mechanics

### Marching Mechanics

#### Automatic Progression
- Armies march continuously without player input
- Base speed: 1.0 units per second
- Direction: Always forward on the infinite path
- No stopping, no retreating, only forward

#### March Speed Modifiers
- **Formation Bonus**: +10% for optimal formation
- **Unit Types**: Heavy units -20%, Scouts +30%
- **Items**: Boots and mobility gear
- **Terrain**: Sand slows -15%, Roads boost +25%
- **Weather**: Storms can reduce speed by 50%

### Army Management

#### Unit Types
1. **Infantry** (Common)
   - Cost: 10 Resonance
   - Health: 100 HP
   - Damage: 10-15
   - Special: None

2. **Shieldbearers** (Uncommon)
   - Cost: 25 Resonance
   - Health: 200 HP
   - Damage: 5-10
   - Special: Absorbs 50% damage for nearby units

3. **Spice Runners** (Uncommon)
   - Cost: 30 Resonance
   - Health: 75 HP
   - Damage: 20-25
   - Special: +50% item discovery

4. **Sardaukar Elite** (Rare)
   - Cost: 100 Resonance
   - Health: 300 HP
   - Damage: 30-40
   - Special: Fear aura, intimidates enemies

5. **Quantum Prophets** (Legendary)
   - Cost: 500 Resonance
   - Health: 500 HP
   - Damage: 50-75
   - Special: Predicts loot 10 seconds ahead

#### Formation System
```
[S][S][S]    S = Shieldbearer
[I][E][I]    I = Infantry
[I][P][I]    E = Elite
[R][R][R]    R = Runner
             P = Prophet
```

Formation Benefits:
- **Defensive**: Shieldbearers in front (+50% damage reduction)
- **Balanced**: Mixed units (+20% all stats)
- **Aggressive**: Damage dealers in front (+40% damage)
- **Economic**: Runners surrounding Prophet (+100% loot)

### Item System

#### Item Generation Algorithm
```
Item Quality = (Army Strength × Random(0.8-1.2)) + Bonus Modifiers
Drop Rate = Base Rate × (1 + (Spice Runners × 0.1))
```

#### Item Categories

1. **Weapons** (Increase damage)
   - Rusty Blade: +5 damage
   - Quantum Edge: +50 damage, 10% crit
   - Sandworm Fang: +100 damage, lifesteal

2. **Armor** (Increase survivability)
   - Scrap Plating: +20 HP
   - Void Carapace: +200 HP, 20% dodge
   - Prescient Weave: +500 HP, damage prediction

3. **Accessories** (Special effects)
   - March Drums: +15% march speed
   - Resonance Amplifier: +30% item quality
   - Temporal Anchor: Revive one unit per hour

4. **Consumables** (Temporary boosts)
   - Spice Ration: +50% all stats for 60s
   - Quantum Surge: Instant 1000 damage burst
   - Time Dilation: Slow time for 10s

#### Item Rarity Distribution
- Common: 60%
- Uncommon: 25%
- Rare: 10%
- Epic: 4%
- Legendary: 0.9%
- Mythic: 0.1%

### Combat System

#### Auto-Battle Mechanics
When armies encounter enemies:
1. **Range Check**: Ranged units fire first
2. **Formation Clash**: Front lines engage
3. **Ability Triggers**: Special abilities activate
4. **Damage Calculation**: Modified by items/formation
5. **Loot Distribution**: Winners collect spoils

#### Damage Calculation
```
Base Damage = Unit Damage × (1 + Weapon Bonus)
Critical Hit = 5% chance for 2× damage
Final Damage = Base × Formation Modifier × Random(0.9-1.1)
```

#### Enemy Types
1. **Sand Lurkers**: Weak but numerous
2. **Rogue Armies**: Other player's defensive formations
3. **Quantum Anomalies**: Unpredictable abilities
4. **Ancient Guardians**: Protect rare loot zones
5. **The Abandoned**: Former player armies gone wild

### Progression Systems

#### Army Power Rating
```
Power = Σ(Unit Health + Unit Damage) × Formation Efficiency × Item Multiplier
```

#### Resonance Economy
- **Earning**: Defeat enemies, collect nodes, daily march
- **Spending**: Recruit units, upgrade formations, reroll items
- **Blockchain**: All transactions recorded on-chain

#### Milestone Rewards
- First 100 units: Legendary item chest
- 1,000 march distance: Formation slot upgrade
- Survive 24 hours: Mythic unit unlock chance
- Top 100 power: Exclusive cosmetics

### Strategic Elements

#### Resource Management
- Balance unit recruitment vs upgrades
- Decide when to fight vs avoid combat
- Optimize formation for current threats
- Time ability usage for maximum impact

#### Risk vs Reward
- **Safe Path**: Lower rewards, guaranteed progress
- **Danger Zones**: High-tier loot, massive losses
- **Quantum Rifts**: Random teleports, random rewards
- **Storm Chasing**: Environmental damage for epic items

### Multiplayer Interactions

#### Indirect PvP
- Leave "echoes" that other players encounter
- Compete for leaderboard positions
- Trade items through blockchain market
- Form alliances for shared benefits

#### Cooperative Elements
- **March Synchronization**: Bonus for nearby armies
- **Trade Routes**: Exchange items between players
- **Raid Bosses**: Require multiple armies
- **Guild Systems**: Shared progression goals

### Endgame Content

#### Prestige System
After reaching max power:
- Reset army with permanent bonuses
- Unlock new unit evolution paths
- Access prestige-only item tiers
- Compete in veteran leaderboards

#### Infinite Scaling
- Enemy difficulty increases with distance
- Item quality scales infinitely
- New mechanics unlock at milestones
- Procedural content generation

### Monetization (Fully On-Chain)

#### NFT Elements
- Unique legendary units
- Cosmetic army skins
- Formation patterns
- March trail effects

#### Token Economy
- $MARCH governance token
- $RESONANCE in-game currency
- Staking for passive rewards
- DAO-controlled game updates

### Quality of Life Features

#### Automation Options
- Auto-upgrade lowest units
- Auto-formation optimizer
- Item filter preferences
- Combat log summaries

#### Statistics Tracking
- Total distance marched
- Units lost/recruited
- Best item found
- Combat win rate
- Economic efficiency

### Balancing Philosophy

#### Core Principles
1. **No Pay-to-Win**: Purchases are cosmetic/convenience only
2. **Skill Expression**: Formation and timing matter
3. **Long-term Viability**: Infinite content, no hard cap
4. **Fair Randomness**: Provable on-chain RNG
5. **Meaningful Choices**: Every decision has impact

### New Player Experience

#### Tutorial Flow
1. Start with 5 basic infantry
2. First item drop guaranteed
3. Guided formation setup
4. First battle is winnable
5. Unlock features gradually

#### Catch-up Mechanics
- New player shields (24h immunity)
- Bonus resonance for first week
- Guaranteed rare unit at day 3
- Matchmaking considers army age
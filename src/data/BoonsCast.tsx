interface Boon {
    ID: number;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const cast : Boon[] = [
    {
        "ID": 1,
        "name": "Electric Shot",
        "god": "Zeus",
        "description": "Your Cast is a burst of chain-lightning that bounces between foes.",
        "img": "./attacks/cast/Electric_Shot_I.webp",
        "prerequisites": []
    },
    {
        "ID": 11,
        "name": "Thunder Flare",
        "god": "Zeus",
        "description": "Your Cast causes a lightning bolt to strike nearby foes.",
        "img": "./attacks/cast/Electric_Shot_I.webp",
        "prerequisites": ["W3-4"] 
    },   
    {
        "ID": 2,
        "name": "Flood Shot",
        "god": "Poseidon",
        "description": "Your Cast damages foes in an area and knocks them away.",
        "img": "./attacks/cast/Flood_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 22,
        "name": "Flood Flare",
        "god": "Poseidon",
        "description": "Your Cast damages foes around you and knocks them away.",
        "img": "./attacks/cast/Flood_Shot_I.webp",
        "prerequisites": ["W3-4"]    
    },    
    {
        "ID": 3,
        "name": "Phalanx Shot",
        "god": "Athena",
        "description": "Your Cast damages foes in a small area, and can Deflect.",
        "img": "./attacks/cast/Phalanx_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 33,
        "name": "Phalanx Flare",
        "god": "Athena",
        "description": "Your Cast damages foes around you, and can Deflect.",
        "img": "./attacks/cast/Phalanx_Shot_I.webp",
        "prerequisites": []      
    },   
    {
        "ID": 4,
        "name": "Crush Shot",
        "god": "Aphrodite",
        "description": "Your Cast is a wide, short-range blast that inflicts Weak.",
        "img": "./attacks/cast/Crush_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 44,
        "name": "Passion Flare",
        "god": "Aphrodite",
        "description": "Your Cast damages foes around you and inflicts Weak.",
        "img": "./attacks/cast/Crush_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 5,
        "name": "True Shot",
        "god": "Artemis",
        "description": "Your Cast seeks foes, with a 10% chance to deal Critical damage.",
        "img": "./attacks/cast/True_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 55,
        "name": "Hunter's Flare",
        "god": "Artemis",
        "description": "Your Cast damages foes around you, with a 10% Critical chance.",
        "img": "./attacks/cast/True_Shot_I.webp",
        "prerequisites": ["W3-4"]      
    },   
    {
        "ID": 6,
        "name": "Slicing Shot",
        "god": "Ares",
        "description": "Your Cast sends a Blade Rift hurling ahead.",
        "img": "./attacks/cast/Slicing_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 66,
        "name": "Slicing Flare",
        "god": "Ares",
        "description": "Your Cast sends a large Blade Rift hurling ahead for a brief time.",
        "img": "./attacks/cast/Slicing_Shot_I.webp",
        "prerequisites": ["W3-4"]   
    },   
    {
        "ID": 7,
        "name": "Trippy Shot",
        "god": "Dionysus",
        "description": "Your Cast lobs a projectile that bursts into Festive Fog.",
        "img": "./attacks/cast/Trippy_Shot_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 77,
        "name": "Trippy Flare",
        "god": "Dionysus",
        "description": "Your Cast damages foes around you, leaving behind Festive Fog.",
        "img": "./attacks/cast/Trippy_Shot_I.webp",
        "prerequisites": ["W3-4", "W4-3"]    
    },   
    {
        "ID": 8,
        "name": "Crystal Beam",
        "god": "Demeter",
        "description": "Your Cast drops a crystal that fires a beam straight ahead for 5 Sec.",
        "img": "./attacks/cast/Crystal_Beam_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 88,
        "name": "Icy Flare",
        "god": "Demeter",
        "description": "Your Cast damages foes around you and inflicts Chill.",
        "img": "./attacks/cast/Crystal_Beam_I.webp",
        "prerequisites": ["W3-4"]      
    }
]
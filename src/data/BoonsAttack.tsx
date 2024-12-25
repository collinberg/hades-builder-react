interface Boon {
    ID: number;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const attack : Boon[] = [
    {
        "ID": 1,
        "name": "Lightning Strike",
        "god": "Zeus",
        "description": "Your Attack emits chain-lightning when you damage a foe.",
        "img": "./attacks/attack/Lightning_Strike_I.webp",
        "prerequisites": []
    },
    {
        "ID": 2,
        "name": "Tempest Strike",
        "god": "Poseidon",
        "description": "Your Attack deals more damage and knocks foes away.",
        "img": "./attacks/attack/Tempest_Strike_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 3,
        "name": "Divine Strike",
        "god": "Athena",
        "description": "Your Attack is stronger, and can Deflect.",
        "img": "./attacks/attack/Divine_Strike_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 4,
        "name": "Heartbreak Strike",
        "god": "Aphrodite",
        "description": "Your Attack deals more damage and inflicts Weak.",
        "img": "./attacks/attack/Heartbreak_Strike_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 5,
        "name": "Deadly Strike",
        "god": "Artemis",
        "description": "Your Attack is stronger, with +15% chance to deal Critical damage.",
        "img": "./attacks/attack/Deadly_Strike_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 6,
        "name": "Curse of Agony",
        "god": "Ares",
        "description": "Your Attack inflicts Doom.",
        "img": "./attacks/attack/Curse_of_Agony_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 7,
        "name": "Drunken Strike",
        "god": "Dionysus",
        "description": "Your Attack inflicts Hangover.",
        "img": "./attacks/attack/Drunken_Strike_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 8,
        "name": "Frost Strike",
        "god": "Demeter",
        "description": "Your Attack is stronger and inflicts Chill.",
        "img": "./attacks/attack/Frost_Strike_I.webp",
        "prerequisites": []      
    }

]
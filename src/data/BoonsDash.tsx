export interface Boon {
    ID: number;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const dash : Boon[] = [
    {
        "ID": 1,
        "name": "Thunder Dash",
        "god": "Zeus",
        "description": "Your Dash causes a lightning bolt to strike nearby foes.",
        "img": "./attacks/dash/Thunder_Dash_I.webp",
        "prerequisites": []
    },
    {
        "ID": 2,
        "name": "Tidal Dash",
        "god": "Zeus",
        "description": "Your Dash damages foes in an area and knocks them away.",
        "img": "./attacks/dash/Tidal_Dash_I.webp",
        "prerequisites": []
    },
    {
        "ID": 3,
        "name": "Divine Dash",
        "god": "Zeus",
        "description": "Your Dash deals damage and can Deflect.",
        "img": "./attacks/dash/Divine_Dash_I.webp",
        "prerequisites": []
    },
    {
        "ID": 4,
        "name": "Passion Dash",
        "god": "Aphrodite",
        "description": "Your Dash inflicts damage where you end up, inflicting Weak.",
        "img": "./attacks/attack/Passion_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 5,
        "name": "Hunter Dash",
        "god": "Artemis",
        "description": "Your Dash-Strike deals more damage.",
        "img": "./attacks/attack/Hunter_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 6,
        "name": "Blade Dash",
        "god": "Ares",
        "description": "Your Dash creates a Blade Rift where you started.",
        "img": "./attacks/attack/Blade_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 7,
        "name": "Drunken Dash",
        "god": "Dionysus",
        "description": "Your Dash inflicts foes near you with Hangover.",
        "img": "./attacks/attack/Drunken_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "ID": 8,
        "name": "Mistral Dash",
        "god": "Demeter",
        "description": "Your Dash shoots a gust ahead that inflicts Chill.",
        "img": "./attacks/attack/Mistral_Dash_I.webp",
        "prerequisites": []      
    }

]
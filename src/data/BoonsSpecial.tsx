export interface Boon {
    id: string;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const special : Boon[] = [
    {
        "id": "SP_ZEU_01",
        "name": "Thunder Flourish",
        "god": "Zeus",
        "description": "Your Special causes a lightning bolt to strike nearby foes.",
        "img": "./attacks/special/Thunder_Flourish.webp",
        "prerequisites": []
    },
    {
        "id": "SP_POS_02",
        "name": "Tempest Strike",
        "god": "Poseidon",
        "description": "Your Special deals more damage and knocks foes away.",
        "img": "./attacks/special/Tempest_Flourish.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_ATH_03",
        "name": "Divine Flourish",
        "god": "Athena",
        "description": "Your Special is stronger, and can Deflect.",
        "img": "./attacks/special/Divine_Flourish.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_APH_04",
        "name": "Heartbreak Flourish",
        "god": "Aphrodite",
        "description": "Your Special deals more damage and inflicts Weak.",
        "img": "./attacks/special/Heartbreak_Flourish.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_ART_05",
        "name": "Deadly Flourish",
        "god": "Artemis",
        "description": "Your Special is stronger, with +20% chance to deal Critical Damage.",
        "img": "./attacks/special/Deadly_Flourish.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_ARE_06",
        "name": "Curse of Pain",
        "god": "Ares",
        "description": "Your Special inflicts Doom.",
        "img": "./attacks/special/Curse_of_Pain.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_DIO_07",
        "name": "Drunken Flourish",
        "god": "Dionysus",
        "description": "Your Special inflicts Hangover.",
        "img": "./attacks/special/Drunken_Flourish.webp",
        "prerequisites": []      
    },
    {
        "id": "SP_DEM_08",
        "name": "Frost Flourish",
        "god": "Demeter",
        "description": "Your Special is stronger and inflicts Chill.",
        "img": "./attacks/special/Frost_Flourish.webp",
        "prerequisites": []      
    }

]
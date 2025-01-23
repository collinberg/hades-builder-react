export interface Boon {
    id: string;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const dash : Boon[] = [
    {
        "id": "DA_ZEU_01",
        "name": "Thunder Dash",
        "god": "Zeus",
        "description": "Your Dash causes a lightning bolt to strike nearby foes.",
        "img": "./attacks/dash/Thunder_Dash_I.webp",
        "prerequisites": []
    },
    {
        "id": "DA_POS_02",
        "name": "Tidal Dash",
        "god": "PoseIdon",
        "description": "Your Dash damages foes in an area and knocks them away.",
        "img": "./attacks/dash/Tidal_Dash_I.webp",
        "prerequisites": []
    },
    {
        "id": "DA_ATH_03",
        "name": "Divine Dash",
        "god": "Athena",
        "description": "Your Dash deals damage and can Deflect.",
        "img": "./attacks/dash/Divine_Dash_I.webp",
        "prerequisites": []
    },
    {
        "id": "DA_APH_4",
        "name": "Passion Dash",
        "god": "Aphrodite",
        "description": "Your Dash inflicts damage where you end up, inflicting Weak.",
        "img": "./attacks/dash/Passion_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "id": "DA_ART_05",
        "name": "Hunter Dash",
        "god": "Artemis",
        "description": "Your Dash-Strike deals more damage.",
        "img": "./attacks/dash/Hunter_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "id": "DA_ARE_06",
        "name": "Blade Dash",
        "god": "Ares",
        "description": "Your Dash creates a Blade Rift where you started.",
        "img": "./attacks/dash/Blade_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "id": "DA_DIO_07",
        "name": "Drunken Dash",
        "god": "Dionysus",
        "description": "Your Dash inflicts foes near you with Hangover.",
        "img": "./attacks/dash/Drunken_Dash_I.webp",
        "prerequisites": []      
    },
    {
        "id": "DA_DEM_08",
        "name": "Mistral Dash",
        "god": "Demeter",
        "description": "Your Dash shoots a gust ahead that inflicts Chill.",
        "img": "./attacks/dash/Mistral_Dash_I.webp",
        "prerequisites": []      
    }

]
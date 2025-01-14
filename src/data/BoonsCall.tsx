interface Boon {
    id: string;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const call : Boon[] = [
    {
        "id": "CL_ZEU_01",
        "name": "Zeus' Aid",
        "god": "Zeus",
        "description": "Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.",
        "img": "./attacks/call/Zeus'_Aid_I.webp",
        "prerequisites": []
    },
    {
        "id": "CL_POS_02", 
        "name": "Poseidon's Aid",
        "god": "Poseidon",
        "description": "Your Call makes you surge into foes while Impervious for 1.2 Sec.",
        "img": "./attacks/call/Poseidon's_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_ATH_03",
        "name": "Athena's Aid",
        "god": "Athena",
        "description": "Your Call briefly makes you Invulnerable and Deflect all attacks. Max gauge bonus: 6x duration",
        "img": "./attacks/call/Athena's_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_APH_04",
        "name": "Aphrodite's Aid",
        "god": "Aphrodite",
        "description": "Your Call fires a seeking projectile that inflicts Charm. Full Gauge Bonus: 2500 damage",
        "img": "./attacks/call/Aphrodite's_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_ART_05",
        "name": "Artemis' Aid",
        "god": "Artemis",
        "description": "Your Call fires a seeking arrow with +35% Critical chance.",
        "img": "./attacks/call/Artemis'_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_ARE_06",
        "name": "Ares' Aid",
        "god": "Ares",
        "description": "Your Call turns you into an Impervious Blade Rift for 1.2 Sec. Max gauge bonus: 5 sec. duration.",
        "img": "./attacks/call/Ares'_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_DIO_07",
        "name": "Dionysus' Aid",
        "god": "Dionysus",
        "description": "Your Call inflicts Hangover to foes all around you for 1.5 Sec.",
        "img": "./attacks/call/Dionysus'_Aid_I.webp",
        "prerequisites": []      
    },
    {
        "id": "CL_DEM_08",
        "name": "Demeter's Aid",
        "god": "Demeter",
        "description": "Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.",
        "img": "./attacks/call/Demeter's_Aid_I.webp",
        "prerequisites": []      
    }

]
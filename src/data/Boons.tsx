interface Boon {
    ID: number;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const boons : Boon[] = [
    {
        ID: 0,        
        name : "Heaven's Vengeance",
        god : "Zeus",
        description : "After you take damage, your foe is struck by lightning.",
        img : "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Zeus_Boon_Icon.png",
        prerequisites: [],
    },
    {
        name : "Lightning Reflexes",
        god : "Zeus",
        description : "After you Dash just before getting hit, a bolt strikes a nearby foes.",
        img : "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Zeus_Boon_Icon.png",
        ID: 1,
        prerequisites: [],
    },
    {
        name : "Storm Lightning",
        god : "Zeus",
        description : "Your chain-lightning effects bounce more times before expiring.",
        img : "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Zeus_Boon_Icon.png",
        ID: 2,
        prerequisites: ['Lightning Strike', 'Electric Shot'],
    },    
    {
        name : "High Voltage",
        god : "Zeus",
        description : "Your lightning bolt effects deal damage in a larger area.",
        img : "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Zeus_Boon_Icon.png",
        ID: 3,
        prerequisites: ['Thunder Flourish', 'Thunder Dash','Zeus\' Aid'],
    },    
];
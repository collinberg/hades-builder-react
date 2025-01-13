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
        img : "./boons/Heaven's_Vengeance_I.webp",
        prerequisites: [],
    },
    {
        name : "Lightning Reflexes",
        god : "Zeus",
        description : "After you Dash just before getting hit, a bolt strikes a nearby foes.",
        img : "./boons/Lightning_Reflexes_I.webp",
        ID: 1,
        prerequisites: [],
    },
    {
        name : "Storm Lightning",
        god : "Zeus",
        description : "Your chain-lightning effects bounce more times before expiring.",
        img : "./boons/Storm_Lightning_I.webp",
        ID: 2,
        prerequisites: ['Lightning Strike', 'Electric Shot'],
    },    
    {
        name : "High Voltage",
        god : "Zeus",
        description : "Your lightning bolt effects deal damage in a larger area.",
        img : "./boons/High_Voltage_I.webp",
        ID: 3,
        prerequisites: ['Thunder Flourish', 'Thunder Dash','Zeus\' Aid'],
    },  
    {
        name : "Double Strike",
        god : "Zeus",
        description : "Your lightning bolt effects have a chance to strike twice.",
        img : "./boons/Double_Strike_I.webp",
        ID: 4,
        prerequisites: [],
    },
    {
        name : "Static Discharge",
        god : "Zeus",
        description : "Your lightning effects also make foes Jolted.",
        img : "./boons/Static_Discharge_I.webp",
        ID: 5,
        prerequisites: [],
    }, 
    {
        name : "Clouded Judgment",
        god : "Zeus",
        description : "Your God Gauge charges faster when you deal or take damage.",
        img : "./boons/Clouded_Judgment_I.webp",
        ID: 6,
        prerequisites: [],
    }, 
    {
        name : "Billowing Strength",
        god : "Zeus",
        description : "After using Call, you deal more damage for 15 Sec.",
        img : "./boons/Billowing_Strength_I.webp",
        ID: 7,
        prerequisites: [],
    }, 
    {
        name : "Splitting Bolt",
        god : "Zeus",
        description : "All your lightning effects create an additional burst.",
        img : "./boons/Splitting_Bolt_I.webp",
        ID: 8,
        prerequisites: [],
    },    
    {
        name : "Smoldering Air",
        god : "Zeus",
        description : "Your Call charges up automatically, but is capped at 25%.",
        img : "./boons/Smoldering_Air_I.webp",
        ID: 9,
        prerequisites: [],
    },              
];
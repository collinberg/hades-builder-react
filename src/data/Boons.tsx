interface Boon {
    id: string;
    name: string;
    god: string;   
    description: string;
    img: string;
    prerequisites: string[];
}

export const boons : Boon[] = [
    {
        id: "Z00",        
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
        id: "Z01", 
        prerequisites: [],
    },
    {
        name : "Storm Lightning",
        god : "Zeus",
        description : "Your chain-lightning effects bounce more times before expiring.",
        img : "./boons/Storm_Lightning_I.webp",
        id: "Z02", 
        prerequisites: ['Lightning Strike', 'Electric Shot'],
    },    
    {
        name : "High Voltage",
        god : "Zeus",
        description : "Your lightning bolt effects deal damage in a larger area.",
        img : "./boons/High_Voltage_I.webp",
        id: "Z03", 
        prerequisites: ['Thunder Flourish', 'Thunder Dash','Zeus\' Aid'],
    },  
    {
        name : "Double Strike",
        god : "Zeus",
        description : "Your lightning bolt effects have a chance to strike twice.",
        img : "./boons/Double_Strike_I.webp",
        id: "Z04",
        prerequisites: [],
    },
    {
        name : "Static Discharge",
        god : "Zeus",
        description : "Your lightning effects also make foes Jolted.",
        img : "./boons/Static_Discharge_I.webp",
        id: "Z05",
        prerequisites: [],
    }, 
    {
        name : "Clouded Judgment",
        god : "Zeus",
        description : "Your God Gauge charges faster when you deal or take damage.",
        img : "./boons/Clouded_Judgment_I.webp",
        id: "Z06", 
        prerequisites: [],
    }, 
    {
        name : "Billowing Strength",
        god : "Zeus",
        description : "After using Call, you deal more damage for 15 Sec.",
        img : "./boons/Billowing_Strength_I.webp",
        id: "Z07", 
        prerequisites: [],
    }, 
    {
        name : "Splitting Bolt",
        god : "Zeus",
        description : "All your lightning effects create an additional burst.",
        img : "./boons/Splitting_Bolt_I.webp",
        id: "Z08",
        prerequisites: [],
    },    
    {
        name : "Smoldering Air",
        god : "Zeus",
        description : "Your Call charges up automatically, but is capped at 25%.",
        img : "./boons/Smoldering_Air_I.webp",
        id: "DUO_09",
        prerequisites: [],
    },
    {
        name : "Dying Lament",
        god : "Aphrodite",
        description : "When foes are slain, they damage nearby foes and inflict Weak. ",
        img : "./boons/Smoldering_Air_I.webp",
        id: "A_01",
        prerequisites: [],
    },  
    {
        name : "Wave of Despair",
        god : "Aphrodite",
        description : "After you take damage, damage nearby foes and inflict Weak.",
        img : "./boons/Smoldering_Air_I.webp",
        id: "A_02",
        prerequisites: [],
    },   
    {
        name : "Different League",
        god : "Aphrodite",
        description : "Resist some damage from nearby foes' attacks.",
        img : "./boons/Smoldering_Air_I.webp",
        id: "A_03",
        prerequisites: [],
    },
    {
        name : "Life Affirmation",
        god : "Aphrodite",
        description : "Any Health chamber rewards are worth more.",
        img : "./boons/Smoldering_Air_I.webp",
        id: "A_04",
        prerequisites: [],
    },                
];
/**
 * An array of weapon data objects, each representing a weapon in the game.
 * Each weapon object contains information about the weapon type, ID, name, image, and its aspects.
 * 
 * @type {Array<Object>}
 * @property {string} type - The type of the weapon (e.g., "sword", "spear").
 * @property {string} ID - The unique identifier for the weapon.
 * @property {string} name - The name of the weapon.
 * @property {string} img - The image path for the weapon.
 * @property {Array<Object>} aspects - An array of aspect objects associated with the weapon.
 * 
 * Each aspect object contains:
 * @property {number} number - The aspect number.
 * @property {string} ID - The unique identifier for the aspect.
 * @property {string} name - The name of the aspect.
 * @property {string} img - The image path for the aspect.
 */
export const weaponsData = [
    {
      "type": "sword",
      "ID"  : "W1",
      "name" : "Stygian Blade",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Stygian_Blade.webp",      
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "/src/assets/img/_aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "ID" : "W1-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W1-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "spear",
      "ID"  : "W2",
      "name" : "Eternal Spear",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Eternal_Spear.webp",
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W2-1",
          "name" : "Eternal Spear",
          "img" : "/src/assets/img/_weapons/Eternal_Spear.webp"
        },
        {
          "number" : 2,
          "ID" : "W2-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W2-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W2-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "shield",
      "ID"  : "W3",
      "name" : "Shield of Chaos",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Shield_of_Chaos.webp",        
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "/src/assets/img/_aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "ID" : "W1-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W1-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "bow",
      "ID"  : "W4",
      "name" : "Seeking Bow",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Heart-Seeker_Bow.webp",  
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "/src/assets/img/_aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "ID" : "W1-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W1-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "fists",
      "ID"  : "W5",
      "name" : "Twin Fists of Malphon",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Twin_Fists.webp",  
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "/src/assets/img/_aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "ID" : "W1-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W1-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "gun",
      "ID"  : "W5",
      "name" : "Adamant Rail",
      "img" : "/hades-builder-react/src/assets/img/_weapons/Adamant_Rail.webp",  
      "aspects" : [
        {
          "number" : 1,
          "ID" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "/src/assets/img/_aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "ID" : "W1-2",
          "name" : "Aspect of Poseidon",
          "img" : "/src/assets/img/_aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 3,
          "ID" : "W1-3",
          "name" : "Aspect of Nemesis",
          "img" : "/src/assets/img/_aspect/Nemesis_Aspect.webp"
        },
        {
          "number" : 4,
          "ID" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "/src/assets/img/_aspect/Arthur_Aspect.webp"
        },
      ]
    }
]    
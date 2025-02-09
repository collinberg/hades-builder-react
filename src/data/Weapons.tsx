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


interface Weapon {
  type: string;
  id: string;
  name: string;
  img: string;
  aspects: Array<Aspect>;
}
interface Aspect {
  number: number;
  id: string;
  name: string;
  img: string;
}

export const weaponsData : Weapon[] = [
    {
      "type": "sword",
      "id"  : "W1",
      "name" : "Stygian Blade",
      "img" : "./weapons/Stygian_Blade.webp",      
      "aspects" : [
        {
          "number" : 1,
          "id" : "W1-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Aspect_Sword.webp"
        },
        {
          "number" : 2,
          "id" : "W1-2",
          "name" : "Aspect of Nemesis",
          "img" : "./aspect/Nemesis_Aspect.webp"
        },        
        {
          "number" : 3,
          "id" : "W1-3",
          "name" : "Aspect of Poseidon",
          "img" : "./aspect/Poseidon_Aspect.webp"
        },
        {
          "number" : 4,
          "id" : "W1-4",
          "name" : "Aspect of Arthur",
          "img" : "./aspect/Arthur_Aspect.webp"
        },
      ]
    },
    {
      "type": "spear",
      "id"  : "W2",
      "name" : "Eternal Spear",
      "img" : "./weapons/Eternal_Spear.webp",
      "aspects" : [
        {
          "number" : 1,
          "id" : "W2-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Aspect_Spear.webp"
        },
        {
          "number" : 2,
          "id" : "W2-2",
          "name" : "Aspect of Achilles",
          "img" : "./aspect/Achilles_Aspect.webp"
        },
        {
          "number" : 3,
          "id" : "W2-3",
          "name" : "Aspect of Hades",
          "img" : "./aspect/Hades_Aspect.webp"
        },
        {
          "number" : 4,
          "id" : "W2-4",
          "name" : "Aspect of Guan Yu",
          "img" : "./aspect/Guan_Yu_Aspect.webp"
        },
      ]
    },
    {
      "type": "shield",
      "id"  : "W3",
      "name" : "Shield of Chaos",
      "img" : "./weapons/Shield_of_Chaos.webp",        
      "aspects" : [
        {
          "number" : 1,
          "id" : "W3-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Aspect_Shield.webp"
        },
        {
          "number" : 2,
          "id" : "W3-2",
          "name" : "Aspect of Chaos",
          "img" : "./aspect/Chaos_Aspect.webp"
        },
        {
          "number" : 3,
          "id" : "W3-3",
          "name" : "Aspect of Zeus",
          "img" : "./aspect/Zeus_Aspect.webp"
        },
        {
          "number" : 4,
          "id" : "W3-4",
          "name" : "Aspect of Beowulf",
          "img" : "./aspect/Shield_aspect_beuwulf.webp"
        },
      ]
    },
    {
      "type": "bow",
      "id"  : "W4",
      "name" : "Seeking Bow",
      "img" : "./weapons/Heart-Seeker_Bow.webp",  
      "aspects" : [
        {
          "number" : 1,
          "id" : "W4-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Aspect_Bow.webp"
        },
        {
          "number" : 2,
          "id" : "W4-2",
          "name" : "Aspect of Chiron",
          "img" : "./aspect/Chiron_Aspect.webp"
        },
        {
          "number" : 3,
          "id" : "W4-3",
          "name" : "Aspect of Hera",
          "img" : "./aspect/Hera_Aspect.webp"
        },
        {
          "number" : 4,
          "id" : "W4-4",
          "name" : "Aspect of Rama",
          "img" : "./aspect/Rama_aspect.webp"
        },
      ]
    },
    {
      "type": "fists",
      "id"  : "W5",
      "name" : "Twin Fists of Malphon",
      "img" : "./weapons/Twin_Fists.webp",  
      "aspects" : [
        {
          "number" : 1,
          "id" : "W5-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Aspect_Fists.webp"
        },
        {
          "number" : 2,
          "id" : "W5-2",
          "name" : "Aspect of Talos",
          "img" : "./aspect/Talos_Aspect.webp"
        },
        {
          "number" : 3,
          "id" : "W5-3",
          "name" : "Aspect of Demeter",
          "img" : "./aspect/Demeter_Aspect.webp"
        },
        {
          "number" : 4,
          "id" : "W5-4",
          "name" : "Aspect of Gilgamesh",
          "img" : "./aspect/Gilgamesh_Aspect.webp"
        },
      ]
    },
    {
      "type": "gun",
      "id"  : "W6",
      "name" : "Adamant Rail",
      "img" : "./weapons/Adamant_Rail.webp",  
      "aspects" : [
        {
          "number" : 1,
          "id" : "W6-1",
          "name" : "Aspect of Zagreus",
          "img" : "./aspect/Zagreus_Rail_Image.webp"
        },
        {
          "number" : 2,
          "id" : "W6-2",
          "name" : "Aspect of Eris",
          "img" : "./aspect/Eris_Aspect.webp"
        },
        {
          "number" : 3,
          "id" : "W6-3",
          "name" : "Aspect of Hestia",
          "img" : "./aspect/Hestia_Aspect_Image.webp"
        },
        {
          "number" : 4,
          "id" : "W6-4",
          "name" : "Aspect of Lucifer",
          "img" : "./aspect/Lycifer_aspect.webp"
        },
      ]
    }
]    
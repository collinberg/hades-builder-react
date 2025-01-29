// Purpose: Reducer for the build state.
import type { Build } from "../App";

export default function buildReducer(build : Build, action : any) {
    console.log("Reducer Activated: " + action.type);

    switch (action.type) {
        case 'weapon':
            return {...build, weapon: action.weapon};
        case 'aspect':
            return {...build, aspect: action.aspect};
        case 'ability':  {
            return {...build, [action.abilityType]: action.ability};
        }       
        case 'boons': {
            return {...build, boons: [...build.boons, action.newBoon]};
        }
        case 'reset' : {
            return action.payload
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
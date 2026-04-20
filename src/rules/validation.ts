import type{ BoonSlot, Boon, Build } from "../context/BuildContext";


//Function that trims down the list of boons to only those that are available based on the current build and the slot being selected
export function getAvailableBoons(build: Build, slot: BoonSlot, data: Boon[]): Boon[] {
    
    //Get the IDs of the currently selected boons in the build
    const selectedBoonIds = [build.attack, build.special, build.cast, build.dash, build.call];

    //Filter the boons based on the current build and the slot being selected
    const availableBoons = data.filter((boon) => {

        //Only show boons that can be slotted in the current slot
        if (!boon.slots.includes(slot)) {
            return false;
        }

        //Check if the boon is already selected in another slot
        if (selectedBoonIds.includes(boon.id)) {
            return false;
        }

        //Check if the boon is available based on prerequisites
        if (boon.prerequisites) {
            for (const prereq of boon.prerequisites) {
                if (!selectedBoonIds.includes(prereq)) {
                    return false;
                }
            }
        }

        return true;
    });

    return availableBoons;
    
}
    
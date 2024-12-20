import { useState } from "react";
import FilterMenu from './FilterMenu';
import Card from './Card'
import Weapons from './Weapons'

function Main() {

    //const [weaponStatus, setWeaponStatus] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);


    return(
        <>
        <main className='p-4 sm:ml-64'>
            {menuStatus && <FilterMenu />}

            <Weapons name="Weapon" onClick={() => (setMenuStatus(false))}/>

{/* 
            <section id='aspects' className='hide'>
                <h2>Select Aspect</h2>
                <ul className='nav aspect-nav'>
                    <li className='nav-item' data-aspect="zagreus"><img src="assets/img/_aspect/Zagreus_Aspect_Sword.webp"/>Aspect of Zagreus</li>
                    <li className='nav-item' data-aspect="poseidon"><img src="assets/img/_aspect/Poseidon_Aspect.webp"/>Aspect of Poseidon</li>
                    <li className='nav-item' data-aspect="nemesis"><img src="assets/img/_aspect/Nemesis_Aspect.webp"/>Aspect of Nemesis</li>
                    <li className='nav-item' data-aspect="arthur"><img src="assets/img/_aspect/Arthur_Aspect.webp"/>Aspect of Arthur</li>
                </ul>
            </section> */}
           
            <section className=''>
                <h2>Boons</h2>
                <div className="flex flex-row flex-wrap gap-4">
                    <Card name="Test Card"/>
                </div>
            </section>
        </main>
        </>
    )
}

export default Main;
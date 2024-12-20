import { useState } from "react";
import Aspect from "./components/Aspect";
import FilterMenu from './components/FilterMenu';
import Card from './components/Card'
import Weapons from './components/Weapons'

import './App.css'

function App() {

  const [build, setBuild] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);
  const [weaponStatus, setWeaponStatus] = useState(false);


  return (
    <>
      <div className="site-wrap">
        <header className="p-4 sm:ml-64">
          <div className="header-inner flex justify-center flex-col">
              {build.length === 0 ? <span className="text-center text-white block py-5 text-2xl">No Boons Added</span> : null}
          </div>
        </header>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-4 py-4 overflow-y-auto">
                <section id='weapon-side' className="space-y-2 font-medium">
                    <h2>Weapon</h2>
                    <div className='weapon_wrap'>
                        <Aspect onClick={() => setWeaponStatus(true)}>Weapon</Aspect>
                    </div>
                    <div className="weapon_wrap">
                        <Aspect>Aspect</Aspect>
                    </div>
                </section>
                <section id='aspect-side'>
                    <h2>Abilities</h2>
                    <Aspect>Attack</Aspect>
                    <Aspect>Special</Aspect>
                    <Aspect>Cast</Aspect>
                    <Aspect>Dash</Aspect>
                    <Aspect>Call</Aspect>
                </section>
            </div>
        </aside>
        <main className='p-4 sm:ml-64'>
            {menuStatus && <FilterMenu />}

            {weaponStatus && <Weapons name="Weapon" onWeaponClick={() => (setMenuStatus(false))}/>}

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
      </div>
    </>
  )
}

export default App

import { useState } from "react";

import BuildSelector from "./components/BuildSelector";
import FilterMenu from './components/FilterMenu';
import Card from './components/Card'
import Weapons from './components/Weapons'
import {weaponsData} from "./data/Weapons"

import './App.css'


function App() {

  const [build, setBuild] = useState(
    {weapon : {
      type: "",
      ID: "",
      name: "",
      img: "",
    },
    aspect: {
      number : 0,
      ID: "",
      name: "",
      img: "",
    },
    attack: "",
    special: "",
    dash: "",
    call: "",
    cast: ""
  });
  const [menuStatus, setMenuStatus] = useState(false);
  const [weaponStatus, setWeaponStatus] = useState(false);
  const [aspectStatus, setAspectStatus] = useState(false);
  const [aspect, setAspect] = useState(0);




  const updateBuild = (item:number) => {
    setWeaponStatus(false),
    setAspectStatus(true),
    setAspect(item),
    setBuild( build => (
      {...build,
        weapon: {
          type: weaponsData[item].type,
          ID: weaponsData[item].ID,
          name: weaponsData[item].name,
          img: weaponsData[item].img,
        }
      }
    ));
    
  }

  const updateAspect = (item:number) => {
    setMenuStatus(true)
    setWeaponStatus(false),
    setAspectStatus(false)
    setBuild( build => (
      {...build,
        aspect: {
          number: weaponsData[aspect].aspects[item].number,
          ID: weaponsData[aspect].aspects[item].ID,
          name: weaponsData[aspect].aspects[item].name,
          img: weaponsData[aspect].aspects[item].img,
        }
      }
    ));
  }


  return (
    <>
      <div className="site-wrap">
        <header className="p-4 sm:ml-64">
          <div className="header-inner flex justify-center flex-col">
              {build.cast === "" ? <span className="text-center text-white block py-5 text-2xl">No Boons Added</span> : null}
          </div>
        </header>
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-4 py-4 overflow-y-auto">
                <section id='weapon-side' className="space-y-2 font-medium">
                    <h2>Weapon</h2>
                    <div className='weapon_wrap'>
                        <BuildSelector onClick={() => setWeaponStatus(true)} attribute={build.weapon}>Weapon</BuildSelector>
                    </div>
                    <div className="weapon_wrap">
                        <BuildSelector onClick={() => setAspectStatus(true)} attribute={build.aspect}>Aspect</BuildSelector>
                    </div>
                </section>
                <section id='aspect-side'>
                    <h2>Abilities</h2>
                    <BuildSelector>Attack</BuildSelector>
                    <BuildSelector>Special</BuildSelector>
                    <BuildSelector>Cast</BuildSelector>
                    <BuildSelector>Dash</BuildSelector>
                    <BuildSelector>Call</BuildSelector>
                </section>
            </div>
        </aside>
        <main className='p-4 sm:ml-64'>
            {menuStatus && <FilterMenu />}

            {weaponStatus && <Weapons 
              name="Weapon"
              data={weaponsData}
              onItemClick={updateBuild}
            />}

            {aspectStatus && <Weapons 
              name="Aspect"
              data={weaponsData[aspect].aspects}
              onItemClick={updateAspect}
            />}


           
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

import { useState } from "react";

import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from './components/FilterMenu';
import Card from './components/Card';
import Weapons from './components/Weapons';

import {weaponsData} from "./data/Weapons";
import {Boon, attack} from "./data/BoonsAttack";
import {special} from "./data/BoonsSpecial";
import {cast} from "./data/BoonsCast"
import { dash } from "./data/BoonsDash";
import { call } from "./data/BoonsCall";

import './App.css'



function App() {

  const [build, setBuild] = useState(
    {
    weapon : {
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
    attack: {
      ID: 0,
      name: "",
      god: "",
      description: "",
      img: "",
    },
    special: {
      ID: 0,
      name: "",
      god: "",
      description: "",
      img: "",
    },
    dash: {
      ID: 0,
      name: "",
      god: "",
      description: "",
      img: "",
    },
    call: {
      ID: 0,
      name: "",
      god: "",
      description: "",
      img: "",
    },
    cast: { 
      ID: 0,
      name: "",
      god: "",
      description: "",
      img: "",
    },
    boons: ""
  });
  const [menuStatus, setMenuStatus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);




  const updateBuild = (item:number) => {
    setActiveIndex(2),
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
    setActiveIndex(0),
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

  const updateAbility = (name:string, ability:string,data:Boon[]) => {
    setActiveIndex(0);
    const selected: any = data.find( selected => selected.name === name);

    if (ability === "attack") {
      setBuild( build => (
        {...build,
          attack: selected
        }
      ));
    } else if (ability === "special") {
      setBuild( build => (
        {...build,
          special: selected
        }
      ));
    } else if (ability === "cast") {
      setBuild( build => (
        {...build,
          cast: selected
        }
      ));
    } else if (ability === "dash") {
      setBuild( build => (
        {...build,
          dash: selected
        }
      ));
    } else if (ability === "call") {
      setBuild( build => (
        {...build,
          call: selected
        }
      ));
    }

  }


  return (
    <>
      <div className="site-wrap">
        <AppNav />
        <div className="flex w-full pt-16 overflow-hidden" aria-hidden="true">
          <aside id="default-sidebar" className="fixed pt-12 top-0 left-0 z-20 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div className="h-full px-4 py-8 overflow-y-auto">
                  <section id='weapon-side' className="space-y-2 font-medium">
                      <h2>Weapon</h2>
                      <div className='weapon_wrap'>
                          <BuildSelector onClick={() => setActiveIndex(1)} attribute={build.weapon}>Weapon</BuildSelector>
                      </div>
                      <div className="weapon_wrap">
                          <BuildSelector onClick={() => setActiveIndex(2)} attribute={build.aspect}>Aspect</BuildSelector>
                      </div>
                  </section>
                  <section id='aspect-side'>
                      <h2>Abilities</h2>
                      <BuildSelector onClick={() => setActiveIndex(3)} attribute={build.attack}>Attack</BuildSelector>
                      <BuildSelector onClick={() => setActiveIndex(4)} attribute={build.special}>Special</BuildSelector>
                      <BuildSelector onClick={() => setActiveIndex(5)} attribute={build.cast}>Cast</BuildSelector>
                      <BuildSelector onClick={() => setActiveIndex(6)} attribute={build.dash}>Dash</BuildSelector>
                      <BuildSelector onClick={() => setActiveIndex(7)} attribute={build.call}>Call</BuildSelector>

                  </section>
              </div>
          </aside>
          <main className='p-4 sm:ml-64'>
            <header className="mb-4">
              <div className="header-inner flex justify-center flex-col">
                  {build.boons === "" ? <span className="text-center text-white block py-5 text-2xl">No Boons Added</span> : null}
              </div>
            </header>          
              {menuStatus && <FilterMenu />}

              {activeIndex == 1 && <Weapons 
                name="Weapon"
                data={weaponsData}
                onItemClick={updateBuild}
              />}

              {activeIndex == 2 && <Weapons 
                name="Aspect"
                data={weaponsData[aspect].aspects}
                onItemClick={updateAspect}
              />}


            
              <section className=''>
                  <h2>Boons</h2>
                  <div className='grid grid-cols-3 gap-4'>
                    {activeIndex == 3 && attack.map((boon, index) => (
                        <Card {...boon} key={index} onClick={() => updateAbility(boon.name,"attack",attack)}
                        />
                    ))}

                    {activeIndex == 4 && special.map((boon, index) => (
                        <Card {...boon}  key={index} onClick={() => updateAbility(boon.name,"special",special)}
                        />
                    ))}


                    {activeIndex == 5 && cast.map((boon, index) => (
                        <Card {...boon}  key={index} onClick={() => updateAbility(boon.name,"cast",cast)}
                        />
                    ))}

                    {activeIndex == 6 && dash.map((boon, index) => (
                        <Card {...boon}  key={index} onClick={() => updateAbility(boon.name,"dash",dash)}
                        />
                    ))}

                    {activeIndex == 7 && call.map((boon, index) => (
                        <Card {...boon}  key={index} onClick={() => updateAbility(boon.name,"call",call)}
                        />
                    
                    ))}

                  </div>
              </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App

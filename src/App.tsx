import { useState, useEffect } from "react";


import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from './components/FilterMenu';
import Card from './components/Card';
import Weapons from './components/Weapons';
import Boon from './components/Boon';

import {weaponsData} from "./data/Weapons";
import {attack} from "./data/BoonsAttack";
import {special} from "./data/BoonsSpecial";
import {cast} from "./data/BoonsCast"
import { dash } from "./data/BoonsDash";
import { call } from "./data/BoonsCall";

import './App.css'

export interface Weapon {
  type: string;
  id: string;
  name: string;
  img: string;
}

export interface Aspect {
  number: number;
  id: string;
  name: string;
  img: string;
}

export interface Boon {
  id: string;
  name: string;
  god: string;   
  description: string;
  img: string;
  prerequisites ?: string[];
}

export interface Build {
  weapon: string;
  aspect: Aspect;
  attack: Boon;
  special: Boon;
  dash: Boon;
  call: Boon;
  cast: Boon;
  boons: Boon[];
}

const initialBuildState: Build = {
  weapon: "",
  aspect: {
    number: 0,
    id: "",
    name: "",
    img: "",
  },
  attack: {
    id: "",
    name: "",
    god: "",
    description: "",
    img: "",
  },
  special: {
    id: "",
    name: "",
    god: "",
    description: "",
    img: "",
  },
  dash: {
    id: "",
    name: "",
    god: "",
    description: "",
    img: "",
  },
  call: {
    id: "",
    name: "",
    god: "",
    description: "",
    img: "",
  },
  cast: {
    id: "",
    name: "",
    god: "",
    description: "",
    img: "",
  },
  boons: [],
};

function App() {

  const [build, setBuild] = useState<Build>(initialBuildState);
  const [boonList, setBoonList] = useState<Boon[]>([]);
  const [selectedGod, setSelectedGod] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);

  const handleFilterClick = (god: string) => {
    selectedGod === god ? setSelectedGod(null) : setSelectedGod(god);
  };

  const filteredBoons = selectedGod
  ? boonList.filter(boon => boon.god === selectedGod)
  : boonList;

  const updateBuild = (item:number) => {
    setActiveIndex(2),
    setAspect(item),
    setBuild( build => (
      {...build,
        weapon: weaponsData[item].id,
      }
    ));
    
  }

  const updateAspect = (item:number) => {
    setActiveIndex(0),
    setBuild( build => (
      {...build,
        aspect: {
          number: weaponsData[aspect].aspects[item].number,
          id: weaponsData[aspect].aspects[item].id,
          name: weaponsData[aspect].aspects[item].name,
          img: weaponsData[aspect].aspects[item].img,
        }
      }
    ));
  }

  const updateAbility = (name:string, ability:string,data:Boon[]) => {
    setActiveIndex(0);
    const selected: any = data.find( selected => selected.name === name);

    setBuild( build => (
      {...build,
        [ability]: selected
      }
    ));
    

  }


  const updateBoons = (boon : Boon) => {
    setActiveIndex(0);

    setBuild( build => (
      {...build,
        boons: [...build.boons, boon]
      }
    ));
    

  }
  //This function accepts an array of Id's. Only one Id needs to be found for it to return as false.
  const isCardDisabled = (prerequisite: string[]) => {
    //If there are no prerequisites, return false.
    //Cards should be active by default
    if (prerequisite?.length == 0 ) return false;
    //If there are prerequisites, check if any of them are in the build.boons array
    //If any of them are found, return false. because returning true would disable the card.
    return !prerequisite.includes(build.aspect.id);
  };


  useEffect(function () {
    async function fetchData() {
      try{
        const res = await fetch("http://localhost:9000/boons");
        const boonList = await res.json();
        console.log(boonList);
        setBoonList(boonList);
      } catch (error) {
        console.log(error);
      }
      }
    fetchData();
  }, []);

  return (
    <>
      <div className="site-wrap">
        <AppNav onResetClick={() => {
            setBuild(initialBuildState)
            setSelectedGod(null)
        }
         } />
        <div className="flex w-full pt-16 overflow-hidden" aria-hidden="true">
          <Sidebar>
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
          </Sidebar>
          <Main>
            <header className="mb-4">
              <div className="header-inner flex justify-center flex-col">
                  {build.boons.length === 0 ? <span className="text-center text-white block py-5 text-2xl">No Boons Added</span> : <ul className="boon-list"> {build.boons.map((boon) => (<Boon {...boon}  key={boon.id} /> )) } </ul>}                
              </div>
            </header>          
              <FilterMenu onFilterClick={handleFilterClick} activeGod={selectedGod}/>

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
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {activeIndex == 3 && attack.map((boon) => (
                        <Card {...boon}
                        key={boon.id}
                        onClick={() => updateAbility(boon.name,"attack",attack)}
                        disabled={isCardDisabled(boon.prerequisites)}
                        />
                    ))}

                    {activeIndex == 4 && special.map((boon) => (
                        <Card {...boon}  key={boon.id} onClick={() => updateAbility(boon.name,"special",special)}
                        disabled={isCardDisabled(boon.prerequisites)}
                        />
                    ))}


                    {activeIndex == 5 && cast.map((boon) => (
                        <Card {...boon}  key={boon.id} onClick={() => updateAbility(boon.name,"cast",cast)}
                        disabled={isCardDisabled(boon.prerequisites)}
                        />
                    ))}

                    {activeIndex == 6 && dash.map((boon) => (
                        <Card {...boon}  key={boon.id} onClick={() => updateAbility(boon.name,"dash",dash)}
                        disabled={isCardDisabled(boon.prerequisites)}
                        />
                    ))}

                    {activeIndex == 7 && call.map((boon) => (
                        <Card {...boon}  key={boon.id} onClick={() => updateAbility(boon.name,"call",call)}
                        disabled={isCardDisabled(boon.prerequisites)}
                        />
                    
                    ))}

                    {filteredBoons.map((boon) => (
                      //If the build.boons array does not contain the current boon, display the card.
                      !build.boons.some(b => b.id === boon.id) && (

                      <Card {...boon} key={boon.id} onClick={() => updateBoons(boon)}
                      disabled={isCardDisabled(boon.prerequisites || [])}
                      />
                      )
                    ))}

                  </div>
              </section>
          </Main>
        </div>
      </div>
    </>
  )
}

export default App

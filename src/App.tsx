import { useState, useEffect, useReducer } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

//Logic imports
import { initialBuildState, buildReducer } from "./context/BuildContext";
import type { Build, Action, Boon, BoonSlot } from "./context/BuildContext";

//Component imports
import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from "./components/FilterMenu";
import Card from "./components/Card";
import Weapons from "./components/Weapons";

//Data imports
import { weaponsData } from "./data/Weapons";
import { attack } from "./data/BoonsAttack";
import { special } from "./data/BoonsSpecial";
import { cast } from "./data/BoonsCast";
import { dash } from "./data/BoonsDash";
import { call } from "./data/BoonsCall";

import "./App.css";

function App() {
  const [build, dispatch] = useReducer<React.Reducer<Build, Action>>(
    buildReducer,
    initialBuildState,
  );
  const [boonList, setBoonList] = useState<Boon[]>([]);

  const [selectedGod, setSelectedGod] = useState<string | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);

  //This function accepts a string and sets the selectedGod state to that string. If the string is already selected, it sets the selectedGod state to null. (untoggle the filter)
  const handleFilterClick = (god: string) => {
    selectedGod === god ? setSelectedGod(null) : setSelectedGod(god);
  };

  //This function filters the boonList array based on the selectedGod state.
  const filteredBoons = selectedGod
    ? boonList.filter((boon) => boon.god === selectedGod)
    : boonList;

  const updateBuild = (item: number) => {
    (setActiveIndex(2),
      setAspect(item),
      dispatch({
        type: "SET_WEAPON",
        weaponId: weaponsData[item].id,
      }));
  };

  const updateAspect = (item: number) => {
    (setActiveIndex(0),
      dispatch({
        type: "SET_ASPECT",
        aspectId: weaponsData[aspect].aspects[item].id,
      }));
  };

  const updateAbility = (name: string, ability: BoonSlot, data: Boon[]) => {
    setActiveIndex(0);
    const selected = data.find((selected) => selected.name === name);
    if (!selected) return;

    dispatch({
      type: "SET_BOON",
      slot: ability,
      boonId: selected.id,
    });
  };

  const updateBoons = (boon: Boon) => {
    setActiveIndex(0);
    dispatch({
      type: "SET_BOON",
      slot: "attack",
      boonId: boon.id,
    });
  };

  // Replaced by validation layer in Step 3
  const isCardDisabled = (_prerequisite: string[]) => false;

  useEffect(function () {
    async function fetchData() {
      if (process.env.NODE_ENV !== "development") {
        try {
          const res = await fetch(
            "https://collinberg.github.io/hades-builder-react/data/boons.json",
          );
          const boonList = await res.json();
          setBoonList(boonList.boons);
        } catch (error) {
          console.log("Error Dummy :" + error);
        }
      } else {
        try {
          const res = await fetch("http://localhost:9000/boons");
          const boonList = await res.json();
          console.log(boonList);
          setBoonList(boonList);
        } catch (error) {
          console.log("Error Dummy :" + error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='site-wrap'>
        <AppNav
          onResetClick={() => {
            dispatch({ type: "RESET" });
            setSelectedGod(null);
          }}
        />
        <div className='flex w-full pt-16 overflow-hidden' aria-hidden='true'>
          <Sidebar>
            <section id='weapon-side' className='space-y-2 font-medium'>
              <h2>Weapon</h2>
              <div className='weapon_wrap'>
                <BuildSelector
                  onClick={() => setActiveIndex(1)}
                  attribute={build.weapon}
                >
                  Weapon
                </BuildSelector>
              </div>
              <div className='weapon_wrap'>
                <BuildSelector
                  onClick={() => setActiveIndex(2)}
                  attribute={build.aspect}
                  weaponData={build.weapon}
                >
                  Aspect
                </BuildSelector>
              </div>
            </section>
            <section id='aspect-side'>
              <h2>Abilities</h2>
              <BuildSelector
                onClick={() => setActiveIndex(3)}
                attribute={build.attack}
              >
                Attack
              </BuildSelector>
              <BuildSelector
                onClick={() => setActiveIndex(4)}
                attribute={build.special}
              >
                Special
              </BuildSelector>
              <BuildSelector
                onClick={() => setActiveIndex(5)}
                attribute={build.cast}
              >
                Cast
              </BuildSelector>
              <BuildSelector
                onClick={() => setActiveIndex(6)}
                attribute={build.dash}
              >
                Dash
              </BuildSelector>
              <BuildSelector
                onClick={() => setActiveIndex(7)}
                attribute={build.call}
              >
                Call
              </BuildSelector>
            </section>
          </Sidebar>
          <Main>
            <FilterMenu
              onFilterClick={handleFilterClick}
              activeGod={selectedGod}
            />

            {activeIndex == 1 && (
              <Weapons
                name='Weapon'
                data={weaponsData}
                onItemClick={updateBuild}
              />
            )}

            {activeIndex == 2 && (
              <Weapons
                name='Aspect'
                data={weaponsData[aspect].aspects}
                onItemClick={updateAspect}
              />
            )}

            <section className='abilities'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-5'>
                {activeIndex == 3 &&
                  attack.map((boon) => (
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() => updateAbility(boon.name, "attack", attack)}
                      disabled={isCardDisabled(boon.prerequisites)}
                    />
                  ))}

                {activeIndex == 4 &&
                  special.map((boon) => (
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() =>
                        updateAbility(boon.name, "special", special)
                      }
                      disabled={isCardDisabled(boon.prerequisites)}
                    />
                  ))}

                {activeIndex == 5 &&
                  cast.map((boon) => (
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() => updateAbility(boon.name, "cast", cast)}
                      disabled={isCardDisabled(boon.prerequisites)}
                    />
                  ))}

                {activeIndex == 6 &&
                  dash.map((boon) => (
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() => updateAbility(boon.name, "dash", dash)}
                      disabled={isCardDisabled(boon.prerequisites)}
                    />
                  ))}

                {activeIndex == 7 &&
                  call.map((boon) => (
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() => updateAbility(boon.name, "call", call)}
                      disabled={isCardDisabled(boon.prerequisites)}
                    />
                  ))}
              </div>
            </section>

            <section className=''>
              <h2>
                Boons <span>{filteredBoons.length}</span>
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {filteredBoons.length > 0 &&
                  filteredBoons?.map((boon) => (
                    //If the build.boons array does not contain the current boon, display the card.
                    <Card
                      {...boon}
                      key={boon.id}
                      onClick={() => updateBoons(boon)}
                      disabled={isCardDisabled(boon.prerequisites || [])}
                    />
                  ))}
              </div>
            </section>
          </Main>
        </div>
      </div>
    </>
  );
}

export default App;

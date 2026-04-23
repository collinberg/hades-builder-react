import { useState } from "react";

//Logic imports
import { BuildProvider, useBuild } from "./context/BuildContext";
import type { BoonSlot, Boon, God } from "./context/BuildContext";

//Component imports
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from "./components/FilterMenu";
import Card from "./components/Card";
import Weapons from "./components/Weapons";

//Data imports
import { weaponsData } from "./data/weapons";
import { boons } from "./data/boons";

import { getAvailableBoons } from "./rules/validation";

import "./App.css";

function App() {
  return (
    <BuildProvider>
      <AppInner />
    </BuildProvider>
  );
}

function AppInner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);
  const [activeGod, setActiveGod] = useState<God | null>(null);
  const { build, dispatch } = useBuild();

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

  // Replaced by validation layer in Step 3
  //const isCardDisabled = (_prerequisite: string[]) => false;

  return (
    <div className='site-wrap'>
      <AppNav
        onResetClick={() => {
          dispatch({ type: "RESET" });
          setActiveIndex(0);
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
              onClick={() => { setActiveIndex(3); setActiveGod(null); }}
              attribute={build.attack}
            >
              Attack
            </BuildSelector>
            <BuildSelector
              onClick={() => { setActiveIndex(4); setActiveGod(null); }}
              attribute={build.special}
            >
              Special
            </BuildSelector>
            <BuildSelector
              onClick={() => { setActiveIndex(5); setActiveGod(null); }}
              attribute={build.cast}
            >
              Cast
            </BuildSelector>
            <BuildSelector
              onClick={() => { setActiveIndex(6); setActiveGod(null); }}
              attribute={build.dash}
            >
              Dash
            </BuildSelector>
            <BuildSelector
              onClick={() => { setActiveIndex(7); setActiveGod(null); }}
              attribute={build.call}
            >
              Call
            </BuildSelector>
          </section>
        </Sidebar>
        <Main>
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
            {activeIndex >= 3 && activeIndex <= 7 && (
              <FilterMenu
                activeGod={activeGod}
                onFilterClick={(god) => setActiveGod(activeGod === god ? null : god)}
              />
            )}
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-5'>
              {(["attack", "special", "cast", "dash", "call"] as const).map((slot, i) =>
                activeIndex === i + 3
                  ? getAvailableBoons(build, slot, boons)
                      .filter((b) => !activeGod || b.god === activeGod)
                      .map((boon) => (
                        <Card
                          {...boon}
                          key={boon.id}
                          onClick={() => updateAbility(boon.name, slot, boons)}
                        />
                      ))
                  : null
              )}
            </div>
          </section>
        </Main>
      </div>
    </div>
  );
}

export default App;

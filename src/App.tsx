import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

//Logic imports
import { BuildProvider, useBuild } from "./context/BuildContext";
import type { BoonSlot, Boon } from "./context/BuildContext";

//Component imports
import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from "./components/FilterMenu";
import Card from "./components/Card";
import Weapons from "./components/Weapons";

//Data imports
import { weaponsData } from "./data/Weapons";
import { boons } from "./data/boons";

import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);
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
  const isCardDisabled = (_prerequisite: string[]) => false;

  return (
    <BuildProvider>
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
            <FilterMenu />

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
                  boons
                    .filter((b) => b.slots.includes("attack"))
                    .map((boon) => (
                      <Card
                        {...boon}
                        key={boon.id}
                        onClick={() =>
                          updateAbility(
                            boon.name,
                            "attack",
                            boons.filter((b) => b.slots.includes("attack")),
                          )
                        }
                        disabled={isCardDisabled(boon.prerequisites)}
                      />
                    ))}

                {activeIndex == 4 &&
                  boons
                    .filter((b) => b.slots.includes("special"))
                    .map((boon) => (
                      <Card
                        {...boon}
                        key={boon.id}
                        onClick={() =>
                          updateAbility(
                            boon.name,
                            "special",
                            boons.filter((b) => b.slots.includes("special")),
                          )
                        }
                        disabled={isCardDisabled(boon.prerequisites)}
                      />
                    ))}

                {activeIndex == 5 &&
                  boons
                    .filter((b) => b.slots.includes("cast"))
                    .map((boon) => (
                      <Card
                        {...boon}
                        key={boon.id}
                        onClick={() =>
                          updateAbility(
                            boon.name,
                            "cast",
                            boons.filter((b) => b.slots.includes("cast")),
                          )
                        }
                        disabled={isCardDisabled(boon.prerequisites)}
                      />
                    ))}

                {activeIndex == 6 &&
                  boons
                    .filter((b) => b.slots.includes("dash"))
                    .map((boon) => (
                      <Card
                        {...boon}
                        key={boon.id}
                        onClick={() =>
                          updateAbility(
                            boon.name,
                            "dash",
                            boons.filter((b) => b.slots.includes("dash")),
                          )
                        }
                        disabled={isCardDisabled(boon.prerequisites)}
                      />
                    ))}

                {activeIndex == 7 &&
                  boons
                    .filter((b) => b.slots.includes("call"))
                    .map((boon) => (
                      <Card
                        {...boon}
                        key={boon.id}
                        onClick={() =>
                          updateAbility(
                            boon.name,
                            "call",
                            boons.filter((b) => b.slots.includes("call")),
                          )
                        }
                        disabled={isCardDisabled(boon.prerequisites)}
                      />
                    ))}
              </div>
            </section>
          </Main>
        </div>
      </div>
    </BuildProvider>
  );
}

export default App;

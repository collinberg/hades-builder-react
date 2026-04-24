import { useState } from "react";

import { BuildProvider, useBuild } from "./context/BuildContext";
import type { BoonSlot, God } from "./context/BuildContext";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import BuildSelector from "./components/BuildSelector";
import AppNav from "./components/AppNav";
import FilterMenu from "./components/FilterMenu";
import BoonList from "./components/BoonList";
import Weapons from "./components/Weapons";

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

const ABILITY_SLOTS: [BoonSlot, number][] = [
  ["attack", 3],
  ["special", 4],
  ["cast", 5],
  ["dash", 6],
  ["call", 7],
];

function AppInner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspect, setAspect] = useState(0);
  const [activeGod, setActiveGod] = useState<God | null>(null);
  const { build, dispatch } = useBuild();

  const currentSlot: BoonSlot | null =
    activeIndex >= 3 && activeIndex <= 7
      ? ABILITY_SLOTS[activeIndex - 3][0]
      : activeIndex === 8
        ? "passive"
        : null;

  const visibleBoons = currentSlot
    ? currentSlot === "passive"
      ? boons
          .filter((b) => b.slots.includes("passive"))
          .filter((b) => !activeGod || b.god === activeGod)
      : getAvailableBoons(build, currentSlot, boons).filter(
          (b) => !activeGod || b.god === activeGod,
        )
    : [];

  const updateBuild = (item: number) => {
    setActiveIndex(2);
    setAspect(item);
    dispatch({ type: "SET_WEAPON", weaponId: weaponsData[item].id });
  };

  const updateAspect = (item: number) => {
    setActiveIndex(0);
    dispatch({
      type: "SET_ASPECT",
      aspectId: weaponsData[aspect].aspects[item].id,
    });
  };

  const openSlot = (index: number) => {
    setActiveIndex(index);
    setActiveGod(null);
  };

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
            {ABILITY_SLOTS.map(([slot, index]) => (
              <BuildSelector
                key={slot}
                onClick={() => openSlot(index)}
                attribute={build[slot]}
              >
                {slot.charAt(0).toUpperCase() + slot.slice(1)}
              </BuildSelector>
            ))}
          </section>
          <section id='passive-side'>
            <h2>Passives</h2>
            <button
              onClick={() => openSlot(8)}
              className={`nav-item ${activeIndex === 8 ? "active" : ""}`}
            >
              {build.passiveBoons.length > 0
                ? `${build.passiveBoons.length} selected`
                : "Browse Passives"}
            </button>
          </section>
        </Sidebar>
        <Main>
          {activeIndex === 1 && (
            <Weapons name='Weapon' data={weaponsData} onItemClick={updateBuild} />
          )}
          {activeIndex === 2 && (
            <Weapons
              name='Aspect'
              data={weaponsData[aspect].aspects}
              onItemClick={updateAspect}
            />
          )}
          {currentSlot && (
            <section className='abilities'>
              <FilterMenu
                activeGod={activeGod}
                onFilterClick={(god) =>
                  setActiveGod(activeGod === god ? null : god)
                }
              />
              <BoonList
                boons={visibleBoons}
                onSelect={(boonId) => {
                  if (currentSlot === "passive") {
                    dispatch({ type: "TOGGLE_PASSIVE_BOON", boonId });
                  } else {
                    dispatch({ type: "SET_BOON", slot: currentSlot, boonId });
                    setActiveIndex(0);
                  }
                }}
                selectedIds={currentSlot === "passive" ? build.passiveBoons : []}
              />
            </section>
          )}
        </Main>
      </div>
    </div>
  );
}

export default App;

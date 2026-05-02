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

function App() {
  return (
    <BuildProvider>
      <AppInner />
    </BuildProvider>
  );
}

const VIEW = {
  WEAPON:  1,
  ASPECT:  2,
  ATTACK:  3,
  SPECIAL: 4,
  CAST:    5,
  DASH:    6,
  CALL:    7,
  PASSIVE: 8,
} as const;

const ABILITY_SLOTS: [Exclude<BoonSlot, "passive">, number][] = [
  ["attack", VIEW.ATTACK],
  ["special", VIEW.SPECIAL],
  ["cast", VIEW.CAST],
  ["dash", VIEW.DASH],
  ["call", VIEW.CALL],
];

const SLOT_VIEW_MAP: Partial<Record<number, BoonSlot>> = {
  [VIEW.ATTACK]: "attack",
  [VIEW.SPECIAL]: "special",
  [VIEW.CAST]: "cast",
  [VIEW.DASH]: "dash",
  [VIEW.CALL]: "call",
  [VIEW.PASSIVE]: "passive",
};

function AppInner() {
  const [activeIndex, setActiveIndex] = useState<number>(VIEW.PASSIVE);
  const [aspect, setAspect] = useState(0);
  const [activeGod, setActiveGod] = useState<God | null>(null);
  const { build, dispatch } = useBuild();

  const currentSlot: BoonSlot | null = SLOT_VIEW_MAP[activeIndex] ?? null;

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
    setActiveIndex(VIEW.ASPECT);
    setAspect(item);
    dispatch({ type: "SET_WEAPON", weaponId: weaponsData[item].id });
  };

  const updateAspect = (item: number) => {
    setActiveIndex(VIEW.PASSIVE);
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
          setActiveIndex(VIEW.PASSIVE);
        }}
      />
      <div className='flex w-full pt-16 overflow-hidden'>
        <Sidebar>
          <section id='weapon-side' className='space-y-2 font-medium'>
            <h2>Weapon</h2>
            <div className='weapon_wrap'>
              <BuildSelector
                onClick={() => setActiveIndex(VIEW.WEAPON)}
                attribute={build.weapon}
              >
                Weapon
              </BuildSelector>
            </div>
            <div className='weapon_wrap'>
              <BuildSelector
                onClick={() => setActiveIndex(VIEW.ASPECT)}
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
              onClick={() => openSlot(VIEW.PASSIVE)}
              className={`nav-item ${activeIndex === VIEW.PASSIVE ? "active" : ""}`}
            >
              {build.passiveBoons.length > 0
                ? `${build.passiveBoons.length} selected`
                : "Browse Passives"}
            </button>
          </section>
        </Sidebar>
        <Main>
          {activeIndex === VIEW.WEAPON && (
            <Weapons
              name='Weapon'
              data={weaponsData}
              onItemClick={updateBuild}
            />
          )}
          {activeIndex === VIEW.ASPECT && (
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
                    setActiveIndex(VIEW.PASSIVE);
                  }
                }}
                selectedIds={
                  currentSlot === "passive" ? build.passiveBoons : []
                }
              />
            </section>
          )}
        </Main>
      </div>
    </div>
  );
}

export default App;

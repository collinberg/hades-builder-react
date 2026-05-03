import type { Build, Action } from "../context/BuildContext";
import { useEffect, useRef } from "react";


import { weaponsData } from "../data/weapons";
import { boons as allBoons } from "../data/boons";


const validWeaponIds = new Set(weaponsData.map((w) => w.id));
const validAspectIds = new Set(weaponsData.flatMap((w) => w.aspects.map((a) => a.id)));
const validBoonIds   = new Set(allBoons.map((b) => b.id));

function validBoon(id: string | null): string | null {
  return id && validBoonIds.has(id) ? id : null;
}


// Function that sets the URL search params based on the current build state. This is used in the useBuildURLSync hook to keep the URL in sync with the build state.
function buildToSearch(build: Build): string {
  const p = new URLSearchParams();
  p.set("v", "1");
  if (build.weapon)              p.set("w",       build.weapon);
  if (build.aspect)              p.set("a",       build.aspect);
  if (build.attack)              p.set("attack",  build.attack);
  if (build.special)             p.set("special", build.special);
  if (build.dash)                p.set("dash",    build.dash);
  if (build.cast)                p.set("cast",    build.cast);
  if (build.call)                p.set("call",    build.call);
  if (build.passiveBoons.length) p.set("passive", build.passiveBoons.join(","));
  if (build.label)               p.set("label",   build.label);
  return `?${p.toString()}`;
}

//Function that parses the URL search params and returns a Build object. This is used in the useBuildURLSync hook to initialize the build state from the URL when the app loads.
function parseSearchToBuild(search: string): Build | null {
  const params = new URLSearchParams(search);
  if (params.get("v") !== "1") return null; // Version check for future compatibility

    const w = params.get("w");
    const a = params.get("a");
    const attack = validBoon(params.get("attack"));
    const special = validBoon(params.get("special"));
    const dash = validBoon(params.get("dash"));
    const cast = validBoon(params.get("cast"));
    const call = validBoon(params.get("call"));

  return {
    weapon:       w && validWeaponIds.has(w) ? w : null,
    aspect:       a && validAspectIds.has(a) ? a : null,
    attack,
    special,
    dash,
    cast,
    call,
    passiveBoons: params.get("passive")?.split(",").filter((id) => validBoonIds.has(id)) ?? [],
    label:        params.get("label") ?? "",
  };
}


export function useBuildURLSync(build: Build, dispatch: React.Dispatch<Action>) {
    //Set variable that persists across renders to track if this is the first render or not.
    // skip updating the URL on the first render since we're just initializing the state from the URL.
  const isFirstRender = useRef(true);

  useEffect(() => {

    // If this is firt render (Page Load), we want to parse the URL and set the build state accordingly.
    //  We also want to skip updating the URL on this render since we're just initializing the state.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      const parsed = parseSearchToBuild(window.location.search);
      if (parsed) dispatch({ type: "HYDRATE", build: parsed });
      return;
    }
    const isEmpty =
      !build.weapon && !build.aspect && !build.attack && !build.special &&
      !build.dash && !build.cast && !build.call &&
      build.passiveBoons.length === 0 && !build.label;

    window.history.replaceState(
      null,
      "",
      window.location.pathname + (isEmpty ? "" : buildToSearch(build)),
    );
  }, [build]);
}

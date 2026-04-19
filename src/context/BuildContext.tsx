export type God =
  | "Zeus"
  | "Poseidon"
  | "Athena"
  | "Ares"
  | "Artemis"
  | "Dionysus"
  | "Aphrodite"
  | "Hermes"
  | "Demeter";

export type BoonSlot = "attack" | "special" | "dash" | "call" | "cast";

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
  god: God;
  description: string;
  img: string;
  slots: BoonSlot[];
  isLegendary?: boolean;
  isDuo?: boolean;
  prerequisites?: string[];
}

export interface Build {
  weapon: string | null;
  aspect: string | null;
  attack: string | null;
  special: string | null;
  dash: string | null;
  cast: string | null;
  call: string | null;
  label: string;
}

export type Action =
  | { type: "SET_WEAPON"; weaponId: string }
  | { type: "SET_ASPECT"; aspectId: string }
  | { type: "SET_BOON"; slot: BoonSlot; boonId: string }
  | { type: "CLEAR_BOON"; slot: BoonSlot }
  | { type: "SET_LABEL"; label: string }
  | { type: "RESET" }
  | { type: "HYDRATE"; build: Build };

export const initialBuildState: Build = {
  weapon: null,
  aspect: null,
  attack: null,
  special: null,
  dash: null,
  cast: null,
  call: null,
  label: "",
};

export function buildReducer(state: Build, action: Action): Build {
  switch (action.type) {
    case "SET_WEAPON":
      return { ...initialBuildState, weapon: action.weaponId };
    case "SET_ASPECT":
      return { ...state, aspect: action.aspectId };
    case "SET_BOON":
      return { ...state, [action.slot]: action.boonId };
    case "CLEAR_BOON":
      return { ...state, [action.slot]: null };
    case "SET_LABEL":
      return { ...state, label: action.label };
    case "RESET":
      return initialBuildState;
    case "HYDRATE":
      return action.build;
  }
}

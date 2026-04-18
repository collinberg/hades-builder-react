export type God =
  | "Zeus"
  | "Poseidon"
  | "Athena"
  | "Ares"
  | "Artemis"
  | "Dionysus"
  | "Aphrodite"
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

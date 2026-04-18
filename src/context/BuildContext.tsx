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
  type?: string;
  prerequisites?: string[];
}

export interface Build {
  weapon: string;
  aspect: string;
  attack: Boon;
  special: Boon;
  dash: Boon;
  call: Boon;
  cast: Boon;
  boons: Boon[];
}

export interface Build {
  weapon: string;
  aspect: string;
  attack: Boon;
  special: Boon;
  dash: Boon;
  call: Boon;
  cast: Boon;
  boons: Boon[];
}

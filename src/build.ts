import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Weapon, Boon, Aspect } from "./App";

export function useBuilder() {
    const [buildParams , setBuildParams] = useSearchParams();
    const weapon = buildParams.get('weapon') || '';
    const aspect = buildParams.get('aspect') || '';
    
    const attack = buildParams.get('attack') || '';
    const special = buildParams.get('special') || '';
    const dash = buildParams.get('dash') || '';
    const call = buildParams.get('call') || '';
    const cast = buildParams.get('cast') || '';

    const SetBuild = useCallback(() => {}, []);
}
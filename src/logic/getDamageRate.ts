import { pokeTypeInterface } from "./pokeType";
import pokeTypeCompatibility from "./pokeTypeCompatibility";

export default function getDamageRate(defenceType1: pokeTypeInterface, defenceType2: pokeTypeInterface, attackType: pokeTypeInterface): number {
    let damageRate: number;
    // defenceType1:attackTypeの計算
    damageRate = getDamageRateFromComp(defenceType1, attackType);
    // defenceType2:attackTypeの計算
    if (defenceType1.id !== defenceType2.id) {
        damageRate *= getDamageRateFromComp(defenceType2, attackType);
    }
    return damageRate;
}

function getDamageRateFromComp(defenceType: pokeTypeInterface, attackType: pokeTypeInterface) : number{
    const pokeTypeCompatibilities = pokeTypeCompatibility()

    // やりたいこと：deftypeとatkTypeを受け取って、対応する倍率を返す
    const pokeTypeComp = pokeTypeCompatibilities
    .filter(item => item.defTypeId === defenceType.id)
    .filter(item => item.atkTypeId === attackType.id)

    return pokeTypeComp[0].damageRate;
}

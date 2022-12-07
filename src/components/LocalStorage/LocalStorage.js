
import { GAMECARDforLocal, USERDATA } from "../Mocks";

export const readLocalStorage = (name) => {
  const data = JSON.parse(localStorage.getItem(name));
  return data;
};
export const writeLocalStorage = (userData, name) => {
  localStorage.setItem(name, JSON.stringify(userData));
};
export const delLocalStorage = (name) => {
  localStorage.removeItem(name);
};
export let GAMECARD = [];
writeLocalStorage(GAMECARDforLocal, "virtualUserGameCard");
GAMECARD= readLocalStorage("virtualUserGameCard");
writeLocalStorage(USERDATA, "virtualUser");
if( !readLocalStorage("userAuthData"))writeLocalStorage('',"userAuthData");

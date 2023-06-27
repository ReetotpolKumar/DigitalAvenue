import { atom } from "recoil";


export const currentMonth1 = atom({ 
    key: "currentMonth",
    default:new Date(),
  });

  export const currentRow = atom({ 
    key: "currentRow",
    default:[],
  });
import { atom } from "recoil";


export const currentMonth1 = atom({ 
    key: "currentMonth",
    default:new Date(),
  });

  export const currentRow1 = atom({ 
    key: "currentRow",
    default:[],
  });

  export const rowDependencyA = atom({ 
    key: "rowDependency",
    default:0,
  });

  export const changeWeekHandleA = atom({ 
    key: "changeWeekHandle",
    default:"",
  });
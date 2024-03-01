import {atomFamily} from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        let fx = TODOS.find(x => x.id === id);
        if (fx == undefined) {
            fx = {title:"Unknown", description:"Unknown"};
        }
        return fx;
    },
})
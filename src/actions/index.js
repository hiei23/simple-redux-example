import { MENU_SELECTED, MENU_ITEM_SELECTED} from "./actions"

export const selectMenu = (menu) => {
    //select is an action creator, it needs to return an action,
    //an objectwith a type property
    return { type: MENU_SELECTED, payload: menu };
};


export const selectMenuItem = (menu_item) => {
    return { type: MENU_ITEM_SELECTED, payload: menu_item };
};
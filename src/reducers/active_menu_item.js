import { MENU_ITEM_SELECTED } from "../actions/actions"

export default function (state=null, action) {

    switch (action.type){
        case MENU_ITEM_SELECTED:
            return action.payload;
    }

    return state;
}

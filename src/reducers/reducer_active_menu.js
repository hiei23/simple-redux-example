//state argument is not application state, only the state
//this reducer is responsible for
import { MENU_SELECTED } from "../actions/actions"

export default function (state=null,action) {

    switch (action.type){
        case MENU_SELECTED:
            return action.payload;
    }

    return state;
}

import { combineReducers } from 'redux';
import MenusReducer from "./reducer_menus";
import ActiveMenu from './reducer_active_menu';
import ActiveMenuItem from './active_menu_item';

const rootReducer = combineReducers({
    menus: MenusReducer,
    activeMenu: ActiveMenu,
    activeMenuItem: ActiveMenuItem
});

export default rootReducer;

import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store/reducer';
import { reducer as homeReducer} from '../pages/home/store/reducer';
import { reducer as detailReducer} from '../pages/detail/store/reducer';
import { reducer as loginReducer} from '../pages/login/store/reducer';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail:detailReducer,
    login:loginReducer,
});

export default reducer;
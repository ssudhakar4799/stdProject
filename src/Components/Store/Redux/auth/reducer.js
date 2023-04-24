import { actionTypes } from "./action";


export const initialState = {
    isAuthentification: false,
    PracDetails: [],
    favorite: [],
    timesheet:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                ...{ auth: {}, isAuthentification: true }
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                ...{ auth: {}, isAuthentification: false }
            };
        case actionTypes.LOGINDETAILS:
            return {
                ...state,
                ...{ registerData: action.payload }
            };
        case actionTypes.PRACTICEDETAILS:
            return {
                ...state,
                ...{ PracDetails: action.payload }
            };
            case actionTypes.FAV:
                return {
                    ...state,
                    ...{ favorite: action.payload }
                };
                case actionTypes.TIMESHEETS:
                return {
                    ...state,
                    ...{ timesheet: action.payload }
                };
            default:
            return state;
    };

}
export default reducer;
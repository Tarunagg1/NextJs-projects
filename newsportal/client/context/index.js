import { useContext, createContext, useReducer } from 'react';
import { authConstant } from './constant';

const Store = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case authConstant.LOGIN_REQUEST: {
            return {
                ...state,
                user: {
                    ...state.user,
                    authentcating: true
                }
            }
        }

        case authConstant.LOGIN_SUCCESS: {
            return {
                ...state,
                user: {
                    ...action.payload.user,
                    authentcating: false,
                    authenticated: true,
                }
            }
        }

        case authConstant.LOGIN_FAILURE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    error: action.payload,
                    authentcating:false,
                    authenticated: false,
                }
            }
        }

        default: {
            return state;
        }
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: {
            authenticated: false,
            authentcating: true,
            error: null
        }
    });

    return (
        <Store.Provider value={[state, dispatch]}>
            {children}
        </Store.Provider>
    );
}


export const useStore = () => useContext(Store);


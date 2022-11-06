import { useReducer, useContext, createContext } from 'react'
import { reducer, initState } from './reducer'

const AuthStateContext = createContext();
const AuthDisptacherContext = createContext();

function useAuthState() {
    const context = useContext(AuthStateContext);

    if (!context) {
        throw Error("useAuthState must be used with AuthProvider")
    }
    return context;
}

function useAuthDispatch() {
    const context = useContext(AuthDisptacherContext);

    if (!context) {
        throw Error("useAuthState must be used with AuthProvider")
    }
    return context;
}


function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        < AuthStateContext.Provider value={state} >
            <AuthDisptacherContext.Provider value={dispatch}>
                {children}
            </AuthDisptacherContext.Provider>
        </AuthStateContext.Provider >
    )
}

export { AuthProvider, useAuthDispatch, useAuthState }
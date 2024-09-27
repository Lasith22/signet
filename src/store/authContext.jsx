import React, {createContext, useReducer} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";


export const AuthContext = createContext({
    user:'',
    email:'',
    password:'',
    accessToken:'',
    message:'',
    status: 0,
    login:()=>{},
    signUp:()=>{},
    signOut:()=>{}
})

const initialState = {
    user: '',
    email: '',
    password: '',
    accessToken: '',
    message: '',
    status: 0
};

function authReducer(state,action){

    switch (action.type){
        case 'RESET_STATE':
            return initialState;
        case 'LOGIN_SUCCESS': {
           const {user} = action.payload;
           return {
               ...state,
               user: user.email,
               email: user.email,
               accessToken: user.accessToken,
               message: 'User Login Successfully!',
               status: 200,
               isLoggedIn: true
           }
        }
        case 'LOGIN_FAILURE' : {
            return {
                ...state,
                message: action.payload.message,
                status: 400
            }
        }
        case 'SIGN_UP_SUCCESS': {
            const {user} = action.payload;

            return {
                ...state,
                user: user.email,
                email: user.email,
                accessToken: user.accessToken, // assuming accessToken is part of user object
                message: 'User Signup Successfully!',
                status: 200,
                // isLoggedIn: false
            }
        }
        case 'SIGN_UP_FAILURE': {
            return {
                ...state,
                message: action.payload.message,
                status: 400
            }
        }
        default:
            return state;
    }

    // if (action.type === 'RESET_STATE') {
    //     // Reset state to the initial state
    //
    // }
    //
    // if (action.type === 'LOGIN'){
    //
    // }
    // if(action.type)
    // if(action.type === 'SIGN_UP'){
    //     const { auth, email, password } = action.payload;
    //     // createUserWithEmailAndPassword (auth,email,password).then((user)=>{
    //     //     console.log(state);
    //     //     const userData=user;
    //     //    return {
    //     //        ...state,
    //     //        user : userData.user.email,
    //     //        email: userData.user.email,
    //     //        accessToken : userData.user.accessToken,
    //     //        message : 'User Login Successfully!',
    //     //        status : 200,
    //     //    }
    //     // }).catch((error)=>{
    //     //     console.log(error.message, error.code);
    //     //     return {
    //     //         ...state,
    //     //         message: 'Email already in use',
    //     //         status: 400
    //     //     }
    //     // })
    // }
    // if(action.type === 'SIGN_OUT'){
    //
    // }
}

export default function AuthContextProvider({children}){

    const [authState, authDispatch] = useReducer(authReducer,{
        user:'',
        email:'',
        password:'',
        accessToken:'',
        message:'',
        status: 0,
        isLoggedIn: false,
        auth})

    function handleLogin(auth,email,password,setIsOpenLoginForm){
        authDispatch({type: 'RESET_STATE'})

        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            console.log(userCredential)
            const user = userCredential;
            setIsOpenLoginForm(false);
            authDispatch({
                type: 'LOGIN_SUCCESS',
                payload: {user}
            })
        }).catch((error)=>{
            console.log(error.message, error.code);
            authDispatch({
                type: 'LOGIN_FAILURE',
                payload: {
                    message: error.message
                }
            })
        })
    }

    function handleSignUp(auth,email,password,setIsOpenSignForm){
        authDispatch({type: 'RESET_STATE'});

        createUserWithEmailAndPassword (auth,email,password).then((userCredentials)=>{
            const user=userCredentials.user;
            setIsOpenSignForm(false);
            authDispatch({
                type: 'SIGN_UP_SUCCESS',
                payload: {user}
            })

        }).catch((error)=>{
            console.log(error.message, error.code);
            authDispatch({
                type: 'SIGN_UP_FAILURE',
                payload: {
                    message: 'Email already in use'
                }
            })
        })

        // authDispatch({
        //     type: 'SIGN_UP',
        //     payload: {
        //         auth:auth,
        //         email: email,
        //         password: password
        //     }
        // })


    }

    function handleSignOut(auth,email,password){
        authDispatch({
            type: 'SIGN_OUT',
            payload: {
                email: email,
                password: password,
                auth:auth
            }
        })
    }

    const authContext = {
        email: authState.email,
        password: authState.password,
        user: authState.user,
        accessToken: authState.accessToken,
        message: authState.message,
        status: authState.status,
        isLoggedIn: authState.isLoggedIn,
        login: handleLogin,
        signUp: handleSignUp,
        signOut: handleSignOut
    }

    return(
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )

}

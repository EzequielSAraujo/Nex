import React, {createContext, useState} from "react";
import { Alert } from "react-native";
import api from '../services/api'
import { useNavigation } from "@react-navigation/native";



export const AuthContext =  createContext({});

export default function AuthProvider({children}){

    const [user, setUser] = useState('')

    const navigation = useNavigation();

    async function signUp(email, senha, nome) {        
        try{
            const response = await api.post('/users',{
                name: nome,
                password: senha,
                email: email,
            })

            navigation.goBack();
            console.log("foi")

        }catch(err){
            console.log("Não foi", err)
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}
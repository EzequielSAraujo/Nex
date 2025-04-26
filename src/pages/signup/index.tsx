import React , {useContext, useState} from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

import {AuthContext} from '../../contexts/auth'

export default function SignIn(){
    const {user} = useContext(AuthContext)
    const {signUp} = useContext(AuthContext)
    const navigation = useNavigation()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function hendle(){
        if(nome === '' || email === '' || email===""){
            Alert.alert('Você deixou um campo em branco seu merda')
            return
        }
            
        signUp(email, senha, nome)
        
    }
    return(
        <View style={styles.container}>
            <TextInput
             placeholder="Nome"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             value={nome}
             onChangeText={(text) => setNome(text)}
             >
            </TextInput>
            <TextInput
             placeholder="Email"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             value={email}
             onChangeText={(text) => setEmail(text)}
             >
            </TextInput>
            <TextInput
             placeholder="Senha"
             style={styles.input}
             autoCapitalize="none"
             value={senha}
             onChangeText={(text) => setSenha(text)}
             secureTextEntry={true}
             >
            </TextInput>
            <TouchableOpacity style={styles.btn} onPress={hendle}>
                <Text style={styles.txtbtn}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
                <Text style={styles.ctxt}>Já possue uma conta?</Text>
            </TouchableOpacity>
            
        </View>
    )
}
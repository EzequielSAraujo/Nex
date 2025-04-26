import React, { useState, useContext } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
    const navigation = useNavigation()
    const {signIn} = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    function handleLogin(){
        signIn(email, senha)
    }

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/Logo.png')}/>
            <TextInput
             placeholder="Email"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             value={email}
             onChangeText={(text)=> setEmail(text)}
             >
            </TextInput>
            <TextInput
             placeholder="Senha"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             value={senha}
             onChangeText={(text) => setSenha(text)}
             >
            </TextInput>
            <TouchableOpacity style={styles.btn}  onPress={handleLogin}>
                <Text style={styles.txtbtn}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text style={styles.ctxt}>Crie uma conta gratuita</Text>
            </TouchableOpacity>
            
        </View>
    )
}
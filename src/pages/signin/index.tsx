import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function SignIn(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/Logo.png')}/>
            <TextInput
             placeholder="Email"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             >
            </TextInput>
            <TextInput
             placeholder="Senha"
             style={styles.input}
             keyboardType="email-address"
             autoCapitalize="none"
             >
            </TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtbtn}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text style={styles.ctxt}>Crie uma conta gratuita</Text>
            </TouchableOpacity>
            
        </View>
    )
}
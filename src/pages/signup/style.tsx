import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#252525"
    },
    img:{
        marginBottom: 50
    },
    input:{
        paddingLeft:15,
        height: 50,
        width:"90%",
        backgroundColor: '#f5f5dc',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        fontSize:18
    },
    btn:{
        backgroundColor:"#e48f4f",
        width:"90%",
        paddingVertical: 20,
        borderRadius:15,
        alignItems:"center",
    },txtbtn:{
        color:"white",
        fontSize:18,
        fontWeight:500
    },
    ctxt:{
        marginTop:18,
        fontSize:18,
        color:"#e9e9e9",
    }
})

export default styles;
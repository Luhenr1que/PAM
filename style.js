import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        padding:10,

    },

    box: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:10,
        borderColor:'#f2e3fe',
        gap:20,
        padding:20,
        borderRadius:20,
    },
    text:{
        fontFamily:'Arial',
        fontSize:30,
        color:'#fff',
    },

    input:{
        fontFamily:'Arial',
        backgroundColor: '#fff',
        borderWidth:1,
        borderRadius:10,
        fontSize:20,
        width:'90%',
        height:40,
        textAlign:'center',
    },

    picker:{
        fontFamily:'Arial',
        textAlign:'center',
        backgroundColor: '#fff',
        borderWidth:2,
        borderRadius:10,
        fontSize:20,
        width:'90%',
        height:40,
    },
    botao:{
        marginTop:10,
        fontFamily:'Arial',
        textAlign:'center',
        justifyContent:'center',
        width:'100%',
        height:40,
        padding:13,
        backgroundColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        borderColor:'#fff',
    },
    textB:{
        textAlign:'center',
        fontFamily:'Arial',
        fontSize:20,
        color:'#000000',
    },

    modal:{
        width:'100%',
        padding:20,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:30,
        position:'absolute',
        borderWidth:2,
    },
    nomeM:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:40,
        color:'#fff',
        padding:10,
    },

    diaM:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:25,
        color:'#fff',
    },
    imageM:{
        flex:2,
        alignContent:'center',
        justifyContent:'center',
        width:320,
        height:320,
        position:'relative',
        padding:5,
    },
    corM:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        paddingBottom:10,
    },
    elementoM:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:25,
        color:'#fff',
    },
    modalErro:{
        width:'100%',
        height:'100%',
        padding:20,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:30,
        borderWidth:2,
    },
    erro:{
        fontFamily:'Arial',
        textAlign:'center',
        fontSize:30,
        color:'#fff',

    }
  });

  export default styles
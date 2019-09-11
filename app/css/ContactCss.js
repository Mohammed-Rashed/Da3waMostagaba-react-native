import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    header:{
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      flex:1,
      elevation: 5,
    },
    errorStyle: {
      fontSize: 17,
      alignSelf: 'center',
      color: 'red',
      fontWeight: 'bold',
    },
    successStyle: {
      fontSize: 17,
      alignSelf: 'center',
      color: 'green',
      fontWeight: 'bold'
    },
    contentStyle: {
      marginLeft:15,
      marginRight:15
    },
    buttonStyle: {
      marginTop:30,
      backgroundColor:'#808080',
      borderRadius:10,
    },
    buttonText: {
      color:'#fff',
      fontSize:20,
    },
    headerStyle:{
      borderWidth: 1,
      borderRadius: 1,
      borderColor: 'rgba(48, 163, 255, 0.05)', 
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8, 
      shadowRadius: 1,
      elevation: 1,
      marginBottom: 2,
      backgroundColor:'#fff' 
    },
    item:{
      marginLeft:0
    },
    textareaStyle: {
      backgroundColor: 'rgba(48, 163, 255, 0.05)',
      marginTop:30,
      borderWidth: 0
    },
    headerTitle: {
      color: '#000',
    },
    inputStyle:{
      marginBottom:5
    }
    
  });
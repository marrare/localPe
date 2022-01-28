import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  select: {

      marginTop: "20px"


  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  titulo: {
      marginTop: 5,
      width: 90,
      color: 'white',
      fontSize: 22,
      fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
  },
  textoBotaoLogin: {
      color: 'black',

  },
  botaoLogin: {
      marginRight: 5,
      borderRadius: 2,
      width: 70,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f7f7f7'
  },
  textoBotaoCadastrar: {
      color: 'white',
      borderColor: '#fff'
  },
  botaoCadastrar: {
      marginRight: 5,
      borderRadius: 2,
      width: 70,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EA4335',
      borderBottomColor: '#fff'
  },
  headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
  },
  heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
  },
  headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
  },
  subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  list: {
      width: '100%',
      backgroundColor: '#000',
  },
  item: {
      aspectRatio: 1,
      width: '100%',
      height: '50%',
      flex: 1,
  },
  imagem: {
      height: '25%'
  },
  input: {
      backgroundColor: '#fff',
      width: '60%',
      height: 30,
      alignSelf: 'center',
      paddingLeft: 10,
      borderRadius: '2%',
      position: 'absolute',
      bottom: "20px",
      top: 170,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 8
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 10
  },
  card: {
      marginTop: '10px',
      padding: '15px',
      width: '100%',

  }
});

export default styles;

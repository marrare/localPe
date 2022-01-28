import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: "50%",
        borderRadius: 4,
        backgroundColor: '#EA4335',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
    botaoComentario: {
        width: "50%",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10
    },
    headingText: {

        fontSize: '1.2rem',
        marginBottom: "8PX",
        fontWeight: '700',
        color: '#EA4335',
        alignSelf: 'left',

    },
    tab: {
        backgroundColor: "#EA4335",
        display: "flex",
        paddingLeft: "0",
        marginBottom: "0",
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
        height: '28%'
    },
    textoCard: {
        color: "#525f7f",
        fontSize: ".875rem"
    },
    textoAnonimo: {
        color: "#EA4335",
        fontSize: "1rem"
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 30,
        alignSelf: 'center',
        paddingLeft: 10,
        borderRadius: '2%',
        position: 'absolute',

        top: 220,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    boxInputs: {
        marginTop: '20px',
        borderRadius: '8px',
        marginHorizontal: '20px',
        padding: '20px',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10

    },
    card: {
        marginTop: '10px',
        padding: '15px',
        width: '100%',

    },
    categoria: {
        marginTop: 20,
        justifyContent: "flex-end",
        alignItems: "baseline",
        color: "#EA4335"
    }
});

export default styles;

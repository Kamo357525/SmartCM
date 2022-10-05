import { StyleSheet} from 'react-native';
import size from "../../assets/gStyle/resho";
const style=StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:size[20],
        marginBottom:size[10],
    },
    body:{
        padding:size[20],
        backgroundColor:"white",
        width:'100%',
        height:'100%',
    },
    btn:{
        borderBottomWidth:size[1],
        borderColor:'grey',
        fontSize:size[18],
        marginBottom:size[12]
    }
})

export default style

import { StyleSheet} from 'react-native';
import size from "../../../assets/gStyle/resho";

const style=StyleSheet.create({
    body:{
        backgroundColor: 'white',
        padding: size[20],
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: size[20],
        color: 'grey',
    },
    victoryHome:{
        width:size[10],
        height:size[250],
        marginLeft:size[350]*-1,
    },
    victoryBlock:{
        position: 'absolute',
        height: size[380],
        width:size[380],
        left:size[10],
        top: size[10],
    }
})

export default style

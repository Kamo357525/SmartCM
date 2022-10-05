import { StyleSheet } from 'react-native';
import size from '../assets/gStyle/resho';

const style = StyleSheet.create({
    socialIconBlock:{
        width:size[50],
        height:size[50],
    },
    socialIconImage:{
        width:'100%',
        height:'100%',
        resizeMode: 'contain',
    },
    numberInp:{
        width:size[210],
        height:size[40],
        borderWidth:1,
        marginBottom:size[15],
        borderColor:'black',
    }

});

export default style;

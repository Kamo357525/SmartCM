import {StyleSheet} from 'react-native';
import size from '../../../assets/gStyle/resho';

const style = StyleSheet.create({
    title: {
        fontSize: size[20],
        color: 'grey',
    },
    body: {
        backgroundColor: 'white',
        padding: size[20],
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    victoryAxis: {
        axis: {stroke: '#334E68'},
        grid: {stroke: '#334E68'},
        tickLabels: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: size[16],
            lineHeight: size[20],
            fill: '#B8C0CC',
        },
    }
});


export default style;

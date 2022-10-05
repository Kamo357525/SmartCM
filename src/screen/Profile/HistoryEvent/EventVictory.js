import React from 'react';
import {View} from 'react-native';
import {VictoryLabel, VictoryPie, VictoryLegend} from 'victory-native';
import Svg from 'react-native-svg';
import style from './style'
import size from "../../../assets/gStyle/resho";

function VictoryEvents(props) {
    return (
        <View style={style.victoryHome}>
            <View
                style={style.victoryBlock}>
                <Svg viewBox="0 0 650 650">
                    <VictoryPie
                        padding={size[125]}
                        startAngle={size[40]}
                        endAngle={size[400]}
                        standalone={false}
                        data={[
                            {x: 'History', y:size[20]},
                            {x: 'Teambulding', y: size[80]},
                        ]}
                        cornerRadius={size[10]}
                        innerRadius={size[45]}
                        labels={() => null}
                        colorScale={['#F7F8F9', '#EF988F']}
                    />


                    <VictoryPie
                        padding={size[110]}
                        standalone={false}
                        startAngle={size[30]}
                        endAngle={size[450]}
                        data={[
                            {x: 'History', y: size[30]},
                            {x: 'Meeting', y: size[70]},
                        ]}
                        cornerRadius={size[10]}
                        innerRadius={size[95]}
                        labels={() => null}
                        colorScale={['#F7F8F9', '#F4C584']}
                    />
                    <VictoryPie
                        standalone={false}
                        padding={size[40]}
                        startAngle={size[30]}
                        endAngle={size[450]}
                        data={[
                            {x: 'History', y: size[70]},
                            {x: 'Events', y: size[30]},
                        ]}
                        cornerRadius={size[10]}
                        innerRadius={size[165]}
                        labels={() => null}
                        colorScale={['#F5F5F5', '#19B3A6']}
                    />

                    <VictoryPie
                        standalone={false}
                        padding={size[50]}
                        startAngle={size[30]}
                        endAngle={size[450]}
                        data={[
                            {x: 'History', y: size[70]},
                            {x: 'Events', y: size[50]},
                        ]}
                        cornerRadius={size[10]}
                        innerRadius={size[110]}
                        labels={() => null}
                        colorScale={['#F5F5F5', '#92BEFA']}
                    />


                    <VictoryLegend
                      x={size[420]}
                      y={size[100]}
                      orientation="vertical"
                      rowGutter={size[10]}
                      data={[
                        {name: 'Events', symbol: {fill: '#19B3A6'}},
                        {name: 'Trainings', symbol: {fill: '#92BEFA'}},
                        {name: 'Meeting', symbol: {fill: '#F4C584'}},
                        {name: 'Teambulding', symbol: {fill: '#EF988F'}},
                      ]}
                      standalone={false}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{fontSize:size[24],
                    }}
                        x={size[180]}
                        y={size[180]}
                        text="Item"
                    />

                </Svg>
            </View>
        </View>
    );
}

export default VictoryEvents;

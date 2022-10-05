import React from 'react';
import {VictoryAxis, VictoryChart, VictoryStack, VictoryArea,} from 'victory-native';
import {View, Text} from 'react-native';
import {historyTask} from "../../../assets/faceData";
import size from "../../../assets/gStyle/resho";
import style from "./style";
function VictoryTask(props) {

    return (
            <View>
                <VictoryChart
                    width={size[360]}
                    height={size[280]}
                    domain={{y: [1, 7]}}>
                    <VictoryAxis
                        crossAxis
                        style={style.victoryAxis}
                        tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ' ']}
                    />
                    <VictoryAxis
                        dependentAxis
                        crossAxis
                        style={style.victoryAxis}
                        tickValues={['0', '10', '20', '30', '40', '50', '60']}
                    />
                    <VictoryStack colorScale={['#EE9087', '#83B7AD']}>
                        <VictoryArea
                            style={{data: {stroke: '#D95353', strokeWidth:size[2]}}}
                            animate
                            data={historyTask}
                            interpolation="natural"
                            x="quarter"
                            y="y"
                        />
                        <VictoryArea
                            style={{data: {stroke: '#347474', strokeWidth: size[2]}}}
                            animate
                            data={historyTask}
                            interpolation="natural"
                            x="quarter"
                            y="k"
                        />
                    </VictoryStack>
                </VictoryChart>
            </View>
    );
}

export default VictoryTask;

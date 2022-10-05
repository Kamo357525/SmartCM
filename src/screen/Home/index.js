import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import background from '../../assets/images/bacgraundHome.png';
import CalendarSvg from '../../assets/images/calendar';
import {logAut} from '../../store/actions/actionLogin';
import FlatList from './flatList';

function Index({navigation}) {
    const [activePage, setActivePage] = useState('All');
    const [calendar, setCalendar] = useState(false);
    const [startDay, setStartDay] = useState(new Date().toISOString().slice(0, 10));
    const [endDay, setEndDay] = useState(new Date().toISOString().slice(0, 10));
    const [selectDays, setSelectDays] = useState({});


    const data = useSelector((store) => store.loginReducer)
    const dispatch = useDispatch()


    return (
        <View style={style.body}>
            <View>
                <Text style={style.userName}>Hello,
                    {data?.name}
                </Text>
                <Image style={style.img} source={background}/>
                <Text style={style.taskCount}>35/50</Text>
            </View>
            <View style={style.select}>
                <Pressable
                    onPress={() => setActivePage('Tasks')}
                    style={{
                        ...style.selectItem,
                        backgroundColor: activePage === 'Tasks' ? '#E7F2F2' : '#347474',
                    }}
                >
                    <Text style={{...style.selectText, color: activePage === 'Tasks' ? '#347474' : '#E7F2F2'}}>
                        Tasks
                    </Text>
                </Pressable>
                <Pressable onPress={() => setActivePage('Events')}
                           style={{
                               ...style.selectItem,
                               backgroundColor: activePage === 'Events' ? '#E7F2F2' : '#347474',
                           }}>
                    <Text style={{...style.selectText, color: activePage === 'Events' ? '#347474' : '#E7F2F2'}}>
                        Events
                    </Text>
                </Pressable>
                <Pressable onPress={() => setActivePage('All')}
                           style={{
                               ...style.selectItem,
                               backgroundColor: activePage === 'All' ? '#E7F2F2' : '#347474'
                           }}>
                    <Text style={{...style.selectText, color: activePage === 'All' ? '#347474' : '#E7F2F2'}}>
                        All
                    </Text>
                </Pressable>
            </View>
            <View style={style.calendarBlock}>
                <Text style={style.infoDay}>{startDay + '_' + endDay}</Text>
                <Pressable onPress={() => setCalendar(!calendar)}
                           style={{...style.blockCalendar, backgroundColor: calendar ? '#347474' : null}}>
                    <CalendarSvg color={calendar ? '#FCFCFC' : '#347474'}/>
                </Pressable>
            </View>
            <SafeAreaView style={style.flatListBlock}>
                <FlatList
                    startDay={startDay} setStartDay={setStartDay}
                    endDay={endDay} setEndDay={setEndDay}
                    selectDays={selectDays} setSelectDays={setSelectDays}
                    activePage={activePage} calendar={calendar}/>
            </SafeAreaView>
        </View>
    );
}

export default Index;


import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import style from './style';
import ButtonButton from '../../assets/images/ButtonBootom';
import Calendar from '../../assets/images/calendar';
import {navigationRef} from '../../navigation/Bar';
import ButtonCreate from '../../components/BottomCreate';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import InputBottomSheet from '../../components/InputBottomSheet';
import Items from './Items';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import CustomTextInput from '../../components/CustomTextInput';
import {useDispatch} from "react-redux";
import {createTask, deleteTask, updateTask} from '../../store/actions/actionTasks';
import {useNavigation} from "@react-navigation/native";

function Index({typeUpdate,itemId,}) {
    const [display, setDisplay] = useState(true);
    const [bottomSheet, setBottomSheet] = useState(false);
    const [activeBottomSheet, setActiveBottomSheet] = useState(false);
    const dispatch = useDispatch();
    const navigation=useNavigation();
    const initialState={
        type:"task",
        Title: '',
        Project: '',
        date: new Date().toISOString().slice(0, 10),
        Duration: '',
        color: "#38A98E",
        checked: true,
    }


    const [task, setTask] = useState(initialState);

    useEffect(() => {
        navigationRef.current.setNativeProps({
            display: display ? 'flex' : 'none',
        });
    }, [display]);

    const clearData=()=>{
        setTask(initialState)
    }

    return (
        <>
            <GestureHandlerRootView>
                <View style={style.body}>
                 <Text style={style.title}>{typeUpdate?'Update':'Create'} Task</Text>
                    <View style={style.input}><CustomTextInput data={task} setData={setTask} val={'Title'}/></View>
                    <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton/>}
                                      setDisplay={setDisplay} text={task.Project.title}
                                      pageBottomSheet={'Project'} setBottomSheet={setBottomSheet}/>
                    <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<Calendar color={'#347474'}/>}
                                      setDisplay={setDisplay} text={task.date}
                                      pageBottomSheet={'date'} setBottomSheet={setBottomSheet}/>
                    <InputBottomSheet setActiveBottomSheet={setActiveBottomSheet} svg={<ButtonButton/>}
                                      setDisplay={setDisplay} text={task.Duration}
                                      pageBottomSheet={'Duration'} setBottomSheet={setBottomSheet}/>
                    {typeUpdate?<View style={style.btnBlock}>
                        <Pressable onPress={()=>{
                            clearData()
                            dispatch(dispatch(updateTask(task, itemId)))
                            navigation.navigate('Home')
                        }} style={style.btnUpdate}>
                            <Text style={style.btnText}>Update</Text>
                        </Pressable>
                        <Pressable onPress={()=>{dispatch(deleteTask(itemId));clearData(); navigation.navigate('Home')}} style={style.btnDelete}>
                            <Text style={style.btnText}>Delete</Text>
                        </Pressable>
                    </View>: <ButtonCreate event={() => {
                        setBottomSheet(true);
                        clearData()
                        dispatch(createTask(task));
                        setActiveBottomSheet('Create');
                    }} text='Create'/>}

                </View>
                <CustomBottomSheet isActive={bottomSheet} setBottomSheet={setBottomSheet} setDisplay={setDisplay}
                                   item={<Items setDisplay={setDisplay} setBottomSheet={setBottomSheet} task={task}
                                                setTask={setTask} active={activeBottomSheet}/>}
                />
            </GestureHandlerRootView>
        </>
    );
}

export default Index;

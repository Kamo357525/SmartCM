import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import BottomClose from "../../../components/BottomClose";
import style from "./style";
import size from '../../../assets/gStyle/resho';
import CustomTextInput from "../../../components/CustomTextInput";
import {book as bookList} from "../../../assets/faceData";



function Index({ book, setBottomSheet }) {
  const [data, setData]=useState({
    comment:'',
  })

  const accept=()=>{
    bookList.forEach((item,i)=>(item.id===book.id?item.accepted=true:null))
    setBottomSheet(false);
  }

  return (
    <View style={style.body}>
      <BottomClose event={()=>setBottomSheet(false)} />
      <View style={{  position:'absolute'}}>
        <Text style={style.title}>{book.title}</Text>
      </View>
      <View style={style.dateBlock}>
        <Text style={style.text}>Employee</Text>
        <Text style={style.textVal}>{book.user.lName+' '+book.user.fName}</Text>
      </View>
      <View style={style.dateBlock}>
        <Text style={style.text}>{book.type === "Vacation" ? "From" : "Date"}</Text>
        <Text style={style.textVal}>{book.date}</Text>
      </View>
      {book.type==='Vacation' || book.type==='Hourly'?
        <View style={style.dateBlock}>
          <Text style={style.text}>{book.type==='Vacation'?'To:':'Time'}</Text>
          <Text style={style.textVal}>{book.type==='Vacation'?book.to:book.time}</Text>
        </View>
        :null}
      <View style={{...style.dateBlock, flexDirection:'column', alignItems:'flex-start'}}>
        <Text style={style.text}>Description:</Text>
        <Text style={{...style.text,marginTop:size[10]}}>{book.description}</Text>
      </View>
      <CustomTextInput data={data} setData={setData} styles={style.inp} val={'comment'} />
      <View style={style.btnBlock}>
        <Pressable onPress={()=>accept()} style={{...style.btn, ...style.accept}}>
          <Text style={style.btnTitle}>Accept</Text>
        </Pressable>
        <Pressable
          onPress={()=>setBottomSheet(false)}
          style={{...style.btn, ...style.cancel}}>
          <Text style={style.btnTitle}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Index;

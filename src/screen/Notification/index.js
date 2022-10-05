import React, { useEffect, useMemo, useState } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { book } from "../../assets/faceData";
import style from "./style";
import NoNotification from "../../assets/images/NoNotification";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { navigationRef } from "../../navigation/Bar";
import EditBook from "./editBook";

const Item = ({ item, setBottomSheet, setBookId, setDisplay }) => (
    <Pressable style={style.bookBlock} onPress={() => {
      setBookId(item);
      setBottomSheet(true);
      setDisplay(false);
    }}>
      <View>
        <Image style={style.image} source={{
          uri: item.user.image,
        }} />
      </View>
      <View>
        <Text style={style.InfoTitle}>{item.user.fName + " " + item.user.lName}<Text
          style={{ color: item.accepted ? "#598D8D" : "#EE9087" }}>{item.accepted ? " accepted " : " declined "}</Text>your
          request</Text>
        <Text style={style.InfoTitle}>{item.date}</Text>
      </View>
      {!item.read ? <View style={style.active}></View> : null}
    </Pressable>
  )
;


function Index() {
  const [filter, setFilter] = useState("Unread");
  const [display, setDisplay] = useState(true);
  const [data, setData] = useState(book);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [bookId, setBookId] = useState();

  const renderItem = ({ item }) => (
    <Item item={item} setBookId={setBookId} setDisplay={setDisplay} bottomSheet={bottomSheet}
          setBottomSheet={setBottomSheet} />
  );

  useMemo(() => {
    let filterData;
    if (filter === "Unread") {
      filterData = book.filter((item, i) => !item.read);
    } else {
      filterData = book.filter((item, i) => item.read);
    }
    setData(filterData);
  }, [filter]);

  useEffect(() => {
    navigationRef.current.setNativeProps({
      display: display ? "flex" : "none",
    });
  }, [display]);


  const read = () => {
    book.forEach((item, i) => item.read = true);
    const filterBook = book.filter((item, i) => !item.read);
    setData(filterBook);
  };


  return (
    <GestureHandlerRootView>
      <View style={style.container}>
        <View style={style.body}>
          <Text style={style.title}>Notifications</Text>
          <View style={style.filterBlock}>
            <Pressable style={{ ...style.filterTitle, backgroundColor: filter === "Unread" ? "#347474" : null }}
                       onPress={() => setFilter("Unread")}>
              <Text style={{ ...style.filterText, color: filter === "Unread" ? "#FCFCFC" : "#347474" }}>Unread</Text>
            </Pressable>
            <Pressable style={{ ...style.filterTitle, backgroundColor: filter === "Read" ? "#347474" : null }}
                       onPress={() => setFilter("Read")}>
              <Text style={{ ...style.filterText, color: filter === "Read" ? "#FCFCFC" : "#347474" }}>Read</Text>
            </Pressable>
          </View>
          {filter === "Unread" ? <Text onPress={read} style={style.mark}>Mark all as read</Text> : null}
          {data.length ? <FlatList
            data={data}
            renderItem={renderItem}
          /> : <View style={style.noNotification}>
            <NoNotification />
            <Text style={style.notificationTitle}>No Notification</Text>
          </View>
          }
        </View>
        <CustomBottomSheet setDisplay={setDisplay} isActive={bottomSheet} setBottomSheet={setBottomSheet}
                           item={<EditBook setBottomSheet={setBottomSheet} book={bookId} />}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default Index;

import React from 'react';
import style from './style';
import { Pressable, ScrollView, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


function Index({ list, keys, data, setData }) {
  return (
    <View style={style.body}>
      {list.map((item, i) =>
        <View key={i}>
          <Pressable onPress={() => setData({ ...data, [keys]: item })}
                     style={style.itemBlock}>
            <CheckBox value={data[keys] ? data[keys].id === item.id : false} />
            <Text style={style.item}>
              {item.title}
            </Text>
          </Pressable>
          <View style={style.children}>
            {item.children.length && data[keys].id === item.id ?
              <Index list={item.children} keys={'OrganizerChildren'} data={data} setData={setData} /> : null}
          </View>
        </View>,
      )}
    </View>
  );
}

export default Index;

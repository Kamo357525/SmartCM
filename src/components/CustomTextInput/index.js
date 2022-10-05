import React, { useEffect, useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, TextInput } from "react-native";
import style from "./style";
import { navigationRef } from "../../navigation/Bar";

function Index({ data, styles, setData, val }) {


  const inputRef = useRef(null);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    navigationRef.current.setNativeProps({
      display: display ? "flex" : "none",
    });
  }, [display]);


  return (
    <TextInput
      style={{ ...style.input, ...styles }}
      placeholder={val}
      value={data[val]}
      onChangeText={(text) => setData({
        ...data,
        [val]: text,
      })}
      ref={inputRef}
      onFocus={() => {
        const keyboardDidHideListener = Keyboard.addListener(
          "keyboardDidHide",
          () => {
            inputRef.current.blur();
            setDisplay(true);
            keyboardDidHideListener.remove();
          },
        );
        setDisplay(false);
      }
      } />
  );
}

export default Index;

import React, { useRef } from 'react';
import style from './style';
import BottomSheet from '@gorhom/bottom-sheet';


function Index({isActive, item, setDisplay, setBottomSheet}) {
  const refBottomSheet=useRef(null)

  return (
    isActive ?
      <BottomSheet
        enablePanDownToClose={true}
        onClose={() => {
          setDisplay(true);
          setBottomSheet(false);
        }}
        ref={refBottomSheet}
        index={1}
        snapPoints={['100%', '100%']}
      >
      {item}
      </BottomSheet> : null
  );
}

export default Index;

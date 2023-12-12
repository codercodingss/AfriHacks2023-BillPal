import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

const CustomBottomsheet = ({
  bottomSheetRef,
  handleSheetChanges,
  snapPoints,
  children,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  handleSheetChanges: (index: number) => void;
  snapPoints: string[];
  children: any;
}) => {
  return (
    <BottomSheet
      style={{
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderTopEndRadius: 14,
        borderTopStartRadius: 14,
      }}
      ref={bottomSheetRef}
      enablePanDownToClose
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      {children}
    </BottomSheet>
  );
};

export default CustomBottomsheet;

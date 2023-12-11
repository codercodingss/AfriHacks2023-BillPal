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

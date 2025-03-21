import React, { useState } from 'react';
import {
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Center,
  Text,
} from '../../../ui-components';

function ActionsheetStory({
  showActionsheet: showActionsheetProp = true,
  ...props
}: any) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Center w={900} h={400}>
      <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Share</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Play</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Center>
  );
}

export default ActionsheetStory;

export {
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Text,
  useState,
};

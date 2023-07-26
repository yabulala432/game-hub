import { HStack, Switch,useColorMode,Text } from "@chakra-ui/react"
import { useState } from "react";


const ColorSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const[ mode,setMode] = useState('Light');
    const changeText = () => {
        toggleColorMode();
        setMode(
            mode === 'Dark' ? 'Light' : 'Dark'
        );
    }
    return (
      <HStack>
        <Switch
          id="mode"
          isChecked={colorMode === "dark"}
          onChange={changeText}
        />
        <Text whiteSpace="nowrap">
          <label htmlFor="mode">{mode} Mode</label>
        </Text>
      </HStack>
    );
}

export default ColorSwitch
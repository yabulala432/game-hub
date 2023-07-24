import { HStack, Switch,useColorMode } from "@chakra-ui/react"
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
          <Switch id="mode" isChecked={ colorMode==='dark' } onChange={changeText} />
        <label htmlFor="mode">{mode} Mode</label>
          
    </HStack>
  )
}

export default ColorSwitch
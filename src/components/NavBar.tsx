import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorSwitch from "./ColorSwitch";

const NavBar = () => {
  return (
      <HStack  justifyContent='space-between' padding={'10px'}>
          <Image src={logo} boxSize={'50px'} />
          <ColorSwitch/>
    </HStack>
  )
}

export default NavBar
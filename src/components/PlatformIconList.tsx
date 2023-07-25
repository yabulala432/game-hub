import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaWindows,FaPlaystation,FaLinux,FaXbox,FaApple,FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import {SiNintendo} from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconMap:{ [key:string]:IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android:FaAndroid
    }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
          <Icon key={iconMap[platform.slug]} color='gray.500' as={iconMap[platform.slug]}/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

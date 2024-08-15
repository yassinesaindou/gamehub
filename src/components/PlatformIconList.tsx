import { HStack, Icon } from "@chakra-ui/react";
 
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
    FaXbox,
  FaAndroid
} from "react-icons/fa";

import { MdPhone} from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
 
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatform";
 
interface Props {
  platforms: Platform[];
}

export default function PlatformIconList({ platforms }: Props) {

    const iconMap:{[key:string]:IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhone,
        web: BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack display={'flex'} justifyContent={'start'} gap={'5px'}  >
      {platforms.map((platform) => (
          <Icon width={5} h={5} as={iconMap[platform.slug]} key={platform.id} color={'gray.500'} />
      ))}
    </HStack>
  );
}

import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
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
import { ReactElement } from "react";
import { IconType } from "react-icons";
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
    <HStack display={'flex'} justifyContent={'start'} gap={'5px'} mt={3} >
      {platforms.map((platform) => (
          <Icon width={7} h={7} as={iconMap[platform.slug]} key={platform.id} color={'gray-500'} />
      ))}
    </HStack>
  );
}

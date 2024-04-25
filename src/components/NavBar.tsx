import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/t_webpixels-icon9935.logowik.com.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} borderRadius="20px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

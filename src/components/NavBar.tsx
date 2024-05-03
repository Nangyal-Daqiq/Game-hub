import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/t_webpixels-icon9935.logowik.com.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import Homepage from "../pages/Homepage";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize={"60px"}
          borderRadius="20px"
          objectFit="fill"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

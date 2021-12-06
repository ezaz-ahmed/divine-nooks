import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../assets/images/Logo.svg";

import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100" align="center">
    <Box cursor="pointer">
      <Link href="/">
        <Image src={Logo} width={120} height={60} alt="Devine-Looks-Logo" />
      </Link>
    </Box>

    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <MenuItem icon={<FcHome />}>
            <Link href="/" passHref>
              Home
            </Link>
          </MenuItem>
          <MenuItem icon={<BsSearch />}>
            <Link href="/search" passHref>
              Search
            </Link>
          </MenuItem>
          <MenuItem icon={<FcAbout />}>
            <Link href="/search?purpose=for-sale" passHref>
              Buy Property
            </Link>
          </MenuItem>
          <MenuItem icon={<FiKey />}>
            <Link href="/search?purpose=for-rent" passHref>
              Rent Property
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;

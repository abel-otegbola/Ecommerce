import { Badge, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { BiStore } from "react-icons/bi";
import { FiBell, FiHeart, FiHome, FiSearch } from "react-icons/fi"
import { useLocation } from "react-router-dom";
import SearchBar from "../searchbar";
import { useSelector } from "react-redux"
import BottomNavLink from "./bottomNavLink";


const MobileBottombar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation().pathname;
    const wishlist = useSelector((state) => state.data.wishlist);

    const active = "brand.900"

    return (
        <Flex 
            justify="space-between" align="center" 
            p="5px 12px" 
            bgColor="white" 
            borderColor="gray.100" 
            w="100%" 
            display={[ "flex", "flex", "none" ]} 
            position="fixed" 
            left="0" 
            bottom="0" 
            boxShadow="0 5px 10px black"
        >

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="0" m="20px" pb="20px">
                    <ModalHeader fontSize="14px">Search products, orders and offers here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SearchBar />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Text 
                onClick={onOpen} 
                p="15px 18px" 
                fontSize="20px" 
                borderRadius="5px" 
                _hover={{color: active}} 
                color={ (location === "#")? active : ""} title="search"
            >
                <FiSearch />
            </Text>

            <BottomNavLink 
                link="/shop"
                activeLocations={["/shop", "/cart", "/checkout", "/order", "/singleProduct"]}
            >
                <BiStore />
            </BottomNavLink>

            
            <BottomNavLink 
                link="/"
                activeLocations={["/", "/login", "/register", "/account"]}
            >
                <FiHome />
            </BottomNavLink>
            
            <BottomNavLink 
                link="/"
                activeLocations={["/notifications"]}
            >
                <FiBell />
            </BottomNavLink>
            
            <BottomNavLink 
                link="/wishlist"
                activeLocations={["/wishlist"]}
            >
                <FiHeart />
                {
                    (wishlist.length > 0)? 
                        <Badge 
                            position="absolute" 
                            top="12px" 
                            right="15px" 
                            bgColor="red" 
                            p="3px" 
                            border="2px solid white" 
                            borderRadius="50%">
                        </Badge>
                    : ""
                }
            </BottomNavLink>

        </Flex>
    )
}

export default MobileBottombar;
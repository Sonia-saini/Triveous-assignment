'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { Link} from 'react-router-dom'
const Links = [{name:'Login',page:"/login"}, {name:'Register', page:"/register"}, {name:'Favourite News',page:"/favouritenews"},{name:'All News',page:"/"}]

const NavLink = (props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box  px={4} bg="black">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} fontWeight={"extrabold"} color={"white"} >
            <Link to={"/"}><Box fontWeight={"extrabold"}>Home</Box></Link>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
              <Link to={link.page}> <Button key={link.name} _hover={{color:"gray"}} bg={"black"} color={"white"}>{link.name}</Button></Link> 
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} fontWeight={"extrabold"}>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <Button key={link} >{link}</Button>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
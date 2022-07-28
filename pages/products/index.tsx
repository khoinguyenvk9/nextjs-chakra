import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
  Center,
  Flex,
  ButtonGroup,
  Button,
  Spacer,
  Heading

} from '@chakra-ui/react'

const Products = () => {
  return (
    <div style={{ padding:"2rem"}}>
      <Box w="100%" bg="tomato">
        <Image
          src="https://assets.reedpopcdn.com/gran_turismo_7_best_cars_7.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/gran_turismo_7_best_cars_7.jpg"
          alt="banner"
        objectFit="cover"/>
    </Box>
    <Center>
      <Box
        mt={-5}
        borderRadius="lg"
        boxShadow="base"
        p={5}
        zIndex={2}
        bg="white"
        w="80%">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text"/>
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text"/>
              </FormControl>
          </Box>
    <Spacer />
    <ButtonGroup gap='2'>
      <Button colorScheme='teal'>Sign Up</Button>
      <Button colorScheme='teal'>Log in</Button>
    </ButtonGroup>
  </Flex>
      </Box>
    </Center>
       <Container maxWidth="90%">
         <Box>
            <Box p={2} border={1} my={3}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text"/>
              </FormControl>
            </Box>
            <Box>
              this is all products
            </Box>
          </Box>
        </Container>
    </div>
  )
}

export default Products

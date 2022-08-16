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
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import AirbnbCard from 'components/AirbnbCard'
import Head from 'next/head'
import products from 'utils/products.json'
const Products = () => {
  return (
    <div style={{ padding: "0rem" }}>
      <Head>
        <title>Tìm kiếm</title>
        <meta name="description" content="Tìm kiếm xe" />
        <link rel="icon" href="/car.png" />
        <link rel="shortcut icon" type="image" href='/car.png' sizes="32x32" />
        <link rel="shortcut icon" type="image" href='/car.png' sizes="16x16" />
        <link type="image/x-icon" rel="shortcut icon" href='/car.png' />
      </Head>

      <Box w="100%" bg="tomato">
        <Image
          src="https://assets.reedpopcdn.com/gran_turismo_7_best_cars_7.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/gran_turismo_7_best_cars_7.jpg"
          alt="banner"
          objectFit="cover" />
      </Box>
      <Center>
        <Box
          mt="-90px"
          borderRadius="lg"
          boxShadow="base"
          p={5}
          zIndex={2}
          bg="white"
          w="85%">
          <Flex minWidth='max-content' alignItems='end' gap='2'>
            <Box p='2'>
              <Heading size='md'>Thời gian nhận xe</Heading>
              <FormControl>
                <FormLabel>Ngày</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box p='2'>
              <FormControl>
                <FormLabel>Giờ</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box p='2'>
              <Heading size='md'>Thời gian trả xe</Heading>
              <FormControl>
                <FormLabel>Ngày</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box p='2'>
              <FormControl>
                <FormLabel>Giờ</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Spacer />
            <Button colorScheme='orange'>Sign Up</Button>
          </Flex>
        </Box>
      </Center>
      <Container maxWidth="90%" mt={10}>
        <Box>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
            {
              products.map((item, idx) => (
                <Box key={idx} height='auto' marginBottom={5}>
                  <AirbnbCard property={item} />
                </Box>
              ))
            }
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}

export default Products


import {Flex, Heading, Box, Container} from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex minWidth="max-content" alignItems="center">
      <Box bg="tomato" w="100%" paddingY={5} color="white" border={0}>
        <Container>
          This is header
        </Container>
      </Box>
    </Flex>
  )
}

export default Header

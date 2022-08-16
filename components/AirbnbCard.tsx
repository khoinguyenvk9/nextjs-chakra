import { FC } from 'react'
import { Box, Image, Badge, } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

const AirbnbCard: FC<{ property?: any }> = ({ property }) => {

  return (
    <Box
      maxW='100%'
      height='100%'
      borderWidth='1px'
      borderRadius='lg'
      _hover={{
        borderColor: 'tomato'
      }}
      overflow='hidden'>
      <Image src={property?.imageUrl} alt={property?.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.seats} Seats &bull; {property.doors} Doors
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice} &ndash; {property.formattedPriceTo}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'yellow.400' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AirbnbCard

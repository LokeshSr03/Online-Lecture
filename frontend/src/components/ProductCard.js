import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box color="gray.200" borderRadius="lg" w="16rem" h="20rem" shadow="md">
      <Image
        src={product.image}
        alt={product.name}
        borderTopLeftRadius="10"
        borderTopRightRadius="10"
        objectFit="cover"
        w="16rem"
        h="10rem"
      ></Image>
      <Flex
        direction="column"
        justifyContent="space-between"
        py="5"
        px="4"
        h="6"
      >
        <Text
          fontSize="16"
          fontWeight="medium"
          color="gray.700"
          fontFamily="sans-serif"
          mt="-1"
        >
          Course Name :- {product.name}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        py="5"
        px="4"
        h="6"
      >
        <Text
          fontSize="16"
          fontWeight="medium"
          color="gray.700"
          fontFamily="sans-serif"
          mt="-4"
        >
          Level :- {product.brand}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        py="5"
        px="4"
        h="6"
      >
        <Text
          fontSize="16"
          fontWeight="medium"
          color="gray.700"
          fontFamily="sans-serif"
          mt="-7"
        >
          Instructor Name :- {product.instructor}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justifyContent="space-between"
        py="5"
        px="4"
        h="6"
      >
        <Text
          fontSize="16"
          fontWeight="medium"
          color="gray.700"
          fontFamily="sans-serif"
          mt="-10"
        >
          Description :- {product.description}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProductCard;

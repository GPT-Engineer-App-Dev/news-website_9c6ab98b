import { Box, Container, Heading, SimpleGrid, Text, Image, Stack, Flex, Link, Spacer, Tag } from "@chakra-ui/react";
import { FaRegNewspaper } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex alignItems="center" mb={8}>
        <FaRegNewspaper size="3em" />
        <Heading ml={3}>NewsToday</Heading>
        <Spacer />
        <Tag colorScheme="green" size="lg" borderRadius="full">
          LIVE
        </Tag>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <NewsCard title="Top Story of the Day" excerpt="The most important event today..." imageUrl="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3N8ZW58MHx8fHwxNzA5ODIxMDI5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <NewsCard title="Latest Finance Insights" excerpt="Stock markets have shown a surprising..." imageUrl="https://placehold.co/600x400" />
        <NewsCard title="Technology and Innovations" excerpt="A new tech startup is disrupting..." imageUrl="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwwfHx8fDE3MDk4MjEwNDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      </SimpleGrid>
    </Container>
  );
};

const NewsCard = ({ title, excerpt, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={`Image for ${title}`} />
      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          <Tag borderRadius="full" px={3} colorScheme="teal">
            New
          </Tag>
          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml={2}>
            2h ago
          </Box>
        </Box>
        <Heading as="h3" size="md" mt={2} mb={2}>
          {title}
        </Heading>
        <Text mb={2}>{excerpt}</Text>
        <Link color="teal.500" href="#">
          Read more
        </Link>
      </Box>
    </Box>
  );
};

export default Index;

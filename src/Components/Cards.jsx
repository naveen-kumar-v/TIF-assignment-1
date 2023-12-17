import {
  Button,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";

const Cards = ({ title, url }) => {
  return (
    <div>
      <Card
        maxWidth="381px"
        border="1px"
        borderColor="rgba(147, 162, 211, 0.38)"
        borderRadius="20.937px"
        p="2px"
      >
        <CardBody>
          <Image
            src={url}
            alt="card image"
            borderRadius="18px"
            Width="326px"
            Height="257px"
            loading="lazy"
          />
          <Stack mt="6" spacing="3" px={"1rem"}>
            <Heading size="md">{title}</Heading>
            <Text
              mb={"1.5rem"}
              lineHeight={"1.6875rem"}
              textColor={"#444957"}
              fontFamily={"sans-serif"}
            >
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard...
            </Text>
            <Button
              variant="outline"
              colorScheme="#424961"
              fontWeight={"600"}
              fontSize={"1.02781rem"}
              lineHeight={"2.22456rem"}
              px="1.635rem"
              // py="0.25rem"
              size="sm"
              maxW="120"
              borderRadius={"999"}
              className="fontSource"
            >
              Read More
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;

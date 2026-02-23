import { Box, Card, Container, Flex } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import type { PageBlocksCall_To_Action } from "../../tina/__generated__/types";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Text from "../Text/Text";

export default function Component(props: PageBlocksCall_To_Action) {
  const content = (
    <Card
      style={{
        background:
          "radial-gradient(circle,rgba(237, 236, 235, 1) 0%, rgba(62, 99, 221, 1) 100%)",
      }}
    >
      <Flex
        direction={{ initial: "column", md: "row" }}
        p={"4"}
        gap="4"
        align="center"
        data-tina-field={tinaField(props.content ?? props)}
      >
        <Box width={{ initial: "100%", md: "75%" }}>
          <Heading
            content={{
              text_de: props.content?.heading_de,
              text_en: props.content?.heading_en,
            }}
            settings={{ marginBottom: "4" }}
          />
          <Text
            content={{
              text_de: props.content?.text_de,
              text_en: props.content?.text_en,
            }}
            settings={{ marginBottom: "1" }}
          />
        </Box>
        <Box width={{ initial: "100%", md: "25%" }}>
          <Flex direction="column" gap="2">
            <Button
              content={{
                text_de: props.content?.buttonText_de,
                text_en: props.content?.buttonText_en,
              }}
              settings={{ align: "center" }}
            />
            <Button
              content={{
                text_de: props.content?.buttonText1_de,
                text_en: props.content?.buttonText1_en,
              }}
              settings={{ align: "center" }}
            />
          </Flex>
        </Box>
      </Flex>
    </Card>
  );

  const box = (
    <Box
      id={props.settings?.id || undefined}
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      mb={props.settings?.marginBottom ?? "inherit"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {content}
    </Box>
  );

  return props.settings?.hasContainer ? <Container>{box}</Container> : box;
}

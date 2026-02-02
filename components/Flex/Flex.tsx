import { Box, Container, Flex } from "@radix-ui/themes";
import { useEditState } from "tinacms/dist/react";
import type { PageBlocksGrid } from "../../tina/__generated__/types";
import EditHelper from "../../tina/templating/EditHelper";
import { renderBlocks } from "../../tina/templating/utils";

export default function Component(props: PageBlocksGrid) {
  const { edit } = useEditState();

  const content = (
    <Flex
      gap={{
        initial: props.settings?.gap_initial || "0",
        xs: props.settings?.gap_xs || "0",
        sm: props.settings?.gap_sm || "0",
        md: props.settings?.gap_md || "0",
        lg: props.settings?.gap_lg || "0",
        xl: props.settings?.gap_xl || "0",
      }}
    >
      {props.content?.items?.length
        ? props.content.items.map((item, i) => (
            <Box key={i}>
              {item?.blocks?.map((block, j) => {
                return renderBlocks(block, j);
              })}
            </Box>
          ))
        : null}
    </Flex>
  );

  const box = (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      mb={props.settings?.marginBottom ?? "inherit"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {edit && <EditHelper {...props} />}
      {content}
    </Box>
  );

  return props.settings?.hasContainer ? <Container>{box}</Container> : box;
}

import { Heading, Box, Container } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { findIntlValue } from "../../tina/templating/special-fields";
import { colorMap } from "../../tina/templating/granular-fields";
import { radixSizeMinusOne } from "../../tina/templating/utils";
import type { PageBlocksCall_To_Action } from "../../tina/__generated__/types";

export default function Component(props: PageBlocksCall_To_Action) {
  const language = useContext(LanguageContext);
  const text = findIntlValue(language, "text");
  console.log("CallToAction props:", props);

  const content = (
    <Heading
      className={
        (props.settings?.font as any) ? (props.settings?.font as any) : "serif"
      }
      data-tina-field={tinaField(props.content ?? props)}
      align={(props.settings?.align as any) ?? "left"}
      size={
        props.settings?.textSize
          ? {
              initial: radixSizeMinusOne(props.settings?.textSize) as any,
              md: props.settings?.textSize as any,
            }
          : "9"
      }
      style={{ color: colorMap[props.settings?.textColor as any] }}
    >
      {props.content?.[text] || "Add your heading here"}
    </Heading>
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

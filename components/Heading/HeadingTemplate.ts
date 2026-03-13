import type { Template } from "tinacms";
import { createIntlField } from "../../tina/templating/special-fields";
import {
  AlignField,
  TextSizeField,
  PaddingXField,
  PaddingYField,
  HasContainerField,
  FontField,
  TextColorField,
  ExtraMarginBottomField,
  ExtraPaddingWhenInGridField,
  IDField,
  ExtraMarginTopField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Heading",
  label: "Heading",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        ...createIntlField({
          name: "text",
          label: "Text",
          type: "string",
          ui: { component: "textarea" },
        }),
      ],
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [
        IDField,
        HasContainerField,
        AlignField,
        TextSizeField,
        TextColorField,
        FontField,
        ExtraMarginTopField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
        ExtraPaddingWhenInGridField,
      ],
    },
  ],
} as Template;

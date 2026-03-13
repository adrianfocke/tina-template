import type { Template } from "tinacms";
import { createIntlField } from "../../tina/templating/special-fields";
import {
  AlignField,
  TextSizeField,
  PaddingXField,
  PaddingYField,
  LinkField,
  HasContainerField,
  FontField,
  TextColorField,
  ExtraMarginBottomField,
  ExtraMarginTopField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Text",
  label: "Text",
  fields: [
    LinkField,
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
        HasContainerField,
        AlignField,
        TextSizeField,
        TextColorField,
        FontField,
        ExtraMarginTopField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;

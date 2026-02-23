import type { Template } from "tinacms";
import { createIntlField } from "../../tina/templating/special-fields";
import {
  AlignField,
  TextSizeField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
  HasContainerField,
  FontField,
  TextColorField,
  ExtraMarginBottomField,
  ExtraPaddingWhenInGridField,
  IDField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Call_To_Action",
  label: "Call To Action",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        ...createIntlField({
          name: "heading",
          label: "Heading",
          type: "string",
          ui: { component: "textarea" },
        }),
        ...createIntlField({
          name: "text",
          label: "Text",
          type: "string",
          ui: { component: "textarea" },
        }),
        ...createIntlField({
          name: "buttonText",
          label: "Button Text",
          type: "string",
          ui: { component: "textarea" },
        }),
        ...createIntlField({
          name: "buttonText1",
          label: "Button Text 1",
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
        MarginXField,
        MarginYField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
        ExtraPaddingWhenInGridField,
      ],
    },
  ],
} as Template;

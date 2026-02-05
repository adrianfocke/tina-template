import components from "../components";

// Matches the last component name in a typename string
// Examples: "StoryBlocksCall_To_Action" → "Call_To_Action", "StoryBlocksAction" → "Action"
// Pattern: Capital letter + lowercase letters + optional underscored suffix
const PASCAL_CASE_OR_UNDERSCORE_COMPONENT_REGEX =
  /[A-Z][a-z]*(?:_[a-zA-Z0-9_]*)?$/;

export const findComponentByTypeName = (typeName: string) => {
  const componentName =
    (typeName as any).match(PASCAL_CASE_OR_UNDERSCORE_COMPONENT_REGEX)?.[0] ??
    undefined;

  if (!componentName) {
    console.warn(
      `Could not extract component name from typename ${typeName}: ${componentName}`,
    );
    return undefined;
  }
  console.log("Extracted component name:", componentName);
  return componentName;
};

export const renderBlocks = (block: any, key: number) => {
  if (!block?.__typename) return null;

  const componentName = findComponentByTypeName((block as any).__typename);
  console.log("Rendering block of type:", componentName);
  const Component = components[componentName];

  if (!Component) return <p key={key}>{componentName}</p>;

  return <Component key={key} {...block} />;
};

export const radixSizeMinusOne = (radixSize: string | undefined | null) => {
  return Number(radixSize) && Number(radixSize) > 1
    ? String(Number(radixSize) - 1)
    : radixSize;
};

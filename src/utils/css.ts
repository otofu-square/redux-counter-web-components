export const css = (args1: TemplateStringsArray, ...args2: any[]) => {
  const styleSheetString = args1.reduce(
    (prev, curr, i) => prev + curr + (args2[i] || ""),
    ""
  );
  const styleSheet = new CSSStyleSheet();
  // @ts-ignore NOTE: could not find replaceSync typing
  styleSheet.replaceSync(styleSheetString);
  return styleSheet;
};

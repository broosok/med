export const shadowsCore = {
  normal: "0px 1px 0px rgba(27, 31, 35, 0.0504)",
  block: "0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 12px rgba(0, 0, 0, 0.05)",
  button: "0px 1px 2px rgba(27, 31, 35, 0.1)",
  input: "0px 1px 2px rgba(27, 31, 35, 0.0504)",
  regular: "0px 1px 2px rgba(27, 31, 35, 0.0504)",
  small:
    "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)",
  medium:
    "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
  large:
    "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
  xLarge:
    "0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
};

export let shadow = (type) => {
  return shadowsCore[type];
};

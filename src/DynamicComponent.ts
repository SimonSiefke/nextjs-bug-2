const map = Object.create(null);

export const registerComponent = (
  name: string,
  fn: (...props: any[]) => any
) => {
  map[name] = fn;
};

export const getComponent = (name: string) => {
  if (!(name in map)) {
    throw new Error(`unknown component ${name}`);
  }
  const Component = map[name];
  return Component;
};

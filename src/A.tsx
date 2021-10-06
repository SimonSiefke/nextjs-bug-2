interface A {
  // @ts-ignore
  a;
}

export default ({ a }: A) => {
  return <h1>A</h1>;
};

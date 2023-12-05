export const SomeBlock = () => {
  const dark = true;

  return(
    <div>
    {
      dark ? <div className="dark">Hello, ternary operator!</div> : "Error"
    }
    </div>
  );
}
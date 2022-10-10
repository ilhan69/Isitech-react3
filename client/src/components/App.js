import HelloWorld from "./HelloWorld";
import Navbar from "./Navbar";
import Separator from "./Separator";

const App = () => {
  return (
    <>
      <Navbar>
        <ul>
          <li>LOGO</li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </Navbar>

      <Separator />

      <HelloWorld name="ilhan" />
    </>
  );
}

export default App;

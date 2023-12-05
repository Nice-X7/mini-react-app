import { Challenge_1 } from "./components/challenge_1"
import { Challenge_2 } from "./components/challenge_2"
import { Challenge_3 } from "./components/challenge_3"
import { Challenge_4 } from "./components/Challenge_4";
import { Challenge_5 } from "./components/Challenge_5";
import { Ternary } from "./components/Ternary_operator";
import { BadComponent } from "./components/Ternary_operator_2";
import { SomeBlock } from "./components/Ternary_operator_3";
import { ParentBlock } from "./components/Ternary_operator_4";

export function App() {
  return (
    <div className="App">
      <Challenge_1 />
      <Challenge_2 />
      <Challenge_3 />
      <Challenge_4 />
      <Challenge_5 />
      <Ternary />
      <BadComponent />
      <SomeBlock />
      <ParentBlock />
    </div>
  );
}
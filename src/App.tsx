/* import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label"; */
import { useState } from "react";
import { Label, Input, Button, List } from "./components/ui";
import { data as users } from "./users";

const useMyHook = (initialState = false) => {
  const [active, setActive] = useState(initialState);
  const handleToggle = () => setActive(!active);
  const handleFalse = () => setActive(false);
  const handleTrue = () => setActive(true);

  return {
    active,
    handleToggle,
  };
};

function App() {
  const { active, handleToggle } = useMyHook();

  const handleNext = () => {
    alert("siguiente");
  };
  return (
    <>
      <h2>Custom Hooks</h2>
      <div className="container mx-auto bg-slate-400">
        <Button onClick={handleToggle}>toggle</Button>
        {active.toString()}
        <ShowInfo />
      </div>
      <br />
      <h2>Lista</h2>
      <br />
      <h2>UI</h2>
      <List
        items={users}
        renderItem={(item) => item.name}
        extractKey={(item) => item.id}
      />
      <br />
      <button onClick={() => console.log("Next...")}>Siguiente</button>
      <button onClick={handleNext}>NEXT</button>
      <form action="" className="container mx-auto">
        <div className="mt-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            placeholder="correo@gmail.com"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          placeholder="*****"
          id="password"
          name="password"
          type="password"
          required
        />
        <Button type="submit" onClick={() => alert("OK")}>
          Sign In
        </Button>
      </form>
    </>
  );
}

export const ShowInfo = () => {
  const { active, handleToggle } = useMyHook(false);
  return (
    <>
      <Button onClick={handleToggle}>Show/Hide</Button>
      {active && (
        <div className="bg-lime-300 h-28">
          <h1>User Info</h1>
        </div>
      )}
    </>
  );
};

export default App;

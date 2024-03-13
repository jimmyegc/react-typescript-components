/* import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label"; */
import { Label, Input, Button } from "./components/ui";

function App() {
  return (
    <>
      <h1>App</h1>
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

export default App;

import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { AllPages } from "./routes/routes";

function App() {
  const allPages = useRoutes(AllPages());
  return <MatxTheme>{allPages}</MatxTheme>;
}

export default App;

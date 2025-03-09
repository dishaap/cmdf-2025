import "./App.css";
import { BaseCard } from "./components/TripCard";
import { NavigationBar } from "./components/NavigationBar";
import { Trip } from "./pages/Activity";
import { TripDashboard } from "./pages/TripDashboard";
import { ActivityCard } from "./components/ActivityCard";

function App() {
  return (
    <>
      <div>
        <Trip />
      </div>
    </>
  );
}

export default App;

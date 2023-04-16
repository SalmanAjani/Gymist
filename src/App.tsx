import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app bg-sky-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

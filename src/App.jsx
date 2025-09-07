import { div } from "motion/react-client";
import ContextTest from "./components/ContextTest";
import { BioProvider } from "./ContextApi/text";
import Home from "./Pages/Home";
import ContextTest2 from "./components/ContextTest2";

// 🔹 Import Toaster
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BioProvider>
      <div className="bg-black min-h-screen">
        <Home />
      </div>
      {/* 🔹 Add Toaster once here */}
      <Toaster position="top-center" reverseOrder={false} />
    </BioProvider>
  );
}

export default App;

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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#ef6944", // emerald green
              color: "black",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px",
            },
            iconTheme: {
              primary: "black",
              secondary: "#22c55e",
            },
          },
          error: {
            style: {
              background: "#ef4444", // red-500
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#ef4444",
            },
          },
          loading: {
            style: {
              background: "#facc15", // amber
              color: "#000",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px",
            },
          },
        }}
      />
    </BioProvider>
  );
}

export default App;

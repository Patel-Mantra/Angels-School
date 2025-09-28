import { createRoot } from "react-dom/client";

function App() {
  return <div>Hello World - React is working!</div>;
}

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}
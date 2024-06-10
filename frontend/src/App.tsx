import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mb-8 mt-20 text-center text-4xl font-bold">
        Vite + React
      </h1>
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

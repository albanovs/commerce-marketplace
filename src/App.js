import React, { lazy } from "react";
import { Header } from "./components/header/header";
import "./index.css";
import { Footer } from "./components/footer/footer";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/home-pages/home-page"));
const AccessoriesPage = lazy(() =>
  import("./pages/accessories-page/accessories-page")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

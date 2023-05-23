import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import HomeFour from "./pages/HomeFour";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <>
        <ScrollTopBtn />
        <Routes>
          <Route path='/' element={<HomeFour />} />
        </Routes>
      </>
    );
  }
}

export default App;

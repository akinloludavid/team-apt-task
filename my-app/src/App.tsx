import * as React from "react";
import AOS from "aos";

import Home from "./pages/Home";

export const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000,
    });
  }, []);
  return <Home />;
};

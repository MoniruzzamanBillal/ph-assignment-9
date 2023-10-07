import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  // function for getting services data from json
  useEffect(() => {
    const getServices = async () => {
      const response = await fetch("/services.json");
      const responseData = await response.json();

      setServices(responseData);

      //   console.log(responseData);
    };

    getServices();
  }, []);

  const appValue = {
    services,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export default AppProvider;

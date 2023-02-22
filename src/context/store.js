import { createContext, useState } from "react";

const Context = createContext();

const storage = localStorage.getItem("user");

console.log(storage);

const storedUser = storage ? JSON.toString(storage) : undefined;

const Provider = ({ children }) => {
  const [store, setStore] = useState(storedUser);
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  );
};

export { Provider, Context };

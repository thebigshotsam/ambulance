import Alert from "./utilities/alert/Alert";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Loader from "./utilities/loader/Loader";
function App() {
  const [route, setRoute] = useState(0);
  const [contact, setContact] = useState();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    title: "",
    content: "",
    type: "",
  });
  return (
    <div className="App">
      <Loader show={loading} />
      <Alert alert={alert} setAlert={setAlert} />
      {route === 0 ? (
        <Login
          setRoute={setRoute}
          setphone={setContact}
          setLoading={setLoading}
          setAlert={setAlert}
        />
      ) : route === 1 ? (
        <Verify
          setRoute={setRoute}
          contact={contact}
          setLoading={setLoading}
          setAlert={setAlert}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

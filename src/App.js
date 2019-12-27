import React from "react";
import "./App.css";
import Table from "./component/Table";
import moment from "moment";
import "moment/locale/tr";
moment.locale("tr");

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;

import "./assets/css/App.scss";
import Card from "./components/Card/Card";
import LogsItem from "./components/LogsItem/LogsItem";
import LogsForm from "./components/LogsForm/LogsForm";
import { useState } from "react";

function App() {
  const [logsData, setLogsData] = useState([
    {
      date: new Date(2020, 1, 15),
      desc: "学习九阴真经",
      time: 60,
      id: 1,
    },
    {
      date: new Date(2021, 2, 14),
      desc: "学习葵花宝典",
      time: 70,
      id: 2,
    },
    {
      date: new Date(2022, 5, 20),
      desc: "学习久仰大名",
      time: 80,
      id: 3,
    },
  ]);

  const onSaveLogHandler = (newLog) => {
    newLog.date = new Date(newLog.date.replace("-", "/"));
    newLog.id = Date.now() + "";

    setLogsData((prevState) => {
      return [newLog, ...prevState];
    });
  };

  const onDeleteHandler = (index) => {
    setLogsData((prevState) => {
      const newLog = [...prevState];
      newLog.splice(index, 1);
      return newLog;
    });
  };

  let data = logsData.map((item, index) => (
    <LogsItem
      date={item.date}
      desc={item.desc}
      time={item.time}
      key={item.id}
      index={index}
      onDeleteLog={onDeleteHandler}
    ></LogsItem>
  ));
  if (data.length === 0) {
    data = <p>无数据</p>;
  }

  return (
    <div className="App">
      <LogsForm onSaveLog={onSaveLogHandler}></LogsForm>
      <Card className="logs">{data}</Card>
    </div>
  );
}

export default App;

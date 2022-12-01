import "./assets/css/App.scss";
import Card from "./components/Card/Card";
import LogsItem from "./components/LogsItem/LogsItem";
import LogsForm from './components/LogsForm/LogsForm';

function App() {
  const logsData = [
    {
      date: new Date(2020, 1, 15),
      desc: "学习九阴真经",
      time: 60,
    },
    {
      date: new Date(2021, 2, 14),
      desc: "学习葵花宝典",
      time: 70,
    },
    {
      date: new Date(2022, 5, 20),
      desc: "学习久仰大名",
      time: 80,
    },
  ];
  return (
    <div className="App">
      <LogsForm></LogsForm>
      <Card className="logs">
        {logsData.map((item) => (
          <LogsItem
            date={item.date}
            desc={item.desc}
            time={item.time}
            key={item.desc}
          ></LogsItem>
        ))}
      </Card>
    </div>
  );
}

export default App;

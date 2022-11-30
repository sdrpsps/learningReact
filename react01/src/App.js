import "./App.scss";
import LogsItem from "./components/LogsItem/LogsItem";

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
      {/* <LogsItem date={new Date()} desc="学习React" time="30"></LogsItem>
      <LogsItem date={new Date()} desc="学习Vue" time="20"></LogsItem> */}
      {logsData.map((item) => (
        <LogsItem
          date={item.date}
          desc={item.desc}
          time={item.time}
          key={item.desc}
        ></LogsItem>
      ))}
      {/* 或者 */}
      {/* {logsData.map((item) => (
        <LogsItem {...item} key={item.desc}></LogsItem>
      ))} */}
    </div>
  );
}

export default App;

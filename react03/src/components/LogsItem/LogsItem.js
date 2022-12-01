import "./LogsItem.scss";

const LogsItem = (props) => {
  /* props 是只读的 */
  // 获取月份
  const month = props.date.toLocaleString("zh-CN", { month: "numeric" });
  // 获取日期
  const day = props.date.getDate();

  return (
    <div className="logs-item">
      <div className="logs-date">
        <div className="month">{month}</div>
        <div className="day">{day}</div>
      </div>
      <div className="logs-item-desc">
        <h2>{props.desc}</h2>
        <div className="logs-item-time">{props.time}分钟</div>
      </div>
    </div>
  );
};

export default LogsItem;

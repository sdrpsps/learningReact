import React, { useState } from "react";
import Card from "../Card/Card";

const LogsForm = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    desc: "",
    time: "",
  });
  const dateChangeHandler = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };
  const descChangeHandler = (e) => {
    setFormData({ ...formData, desc: e.target.value });
  };
  const timeChangeHandler = (e) => {
    setFormData({ ...formData, time: +e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    setFormData({
      date: "",
      desc: "",
      time: "",
    });
    props.onSaveLog(formData)
  };
  return (
    <div>
      <Card>
        <form onSubmit={formSubmit}>
          <label htmlFor="date">日期:</label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={dateChangeHandler}
          />
          <label htmlFor="desc">内容:</label>
          <input
            id="desc"
            type="text"
            value={formData.desc}
            onChange={descChangeHandler}
          />
          <label htmlFor="time">时长:</label>
          <input
            id="time"
            type="number"
            value={formData.time}
            onChange={timeChangeHandler}
          />
          <button>添加</button>
        </form>
      </Card>
    </div>
  );
};

export default LogsForm;

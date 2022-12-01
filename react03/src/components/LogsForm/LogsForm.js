import React, { useState } from "react";
import Card from "../Card/Card";

const LogsForm = () => {
  const [formData, setFormData] = useState({
    dateV: "",
    descV: "",
    timeV: "",
  });
  const dateChangeHandler = (e) => {
    setFormData({ ...formData, dateV: e.target.value });
  };
  const descChangeHandler = (e) => {
    setFormData({ ...formData, descV: e.target.value });
  };
  const timeChangeHandler = (e) => {
    setFormData({ ...formData, timeV: +e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      dateV: "",
      descV: "",
      timeV: "",
    });
  };
  return (
    <div>
      <Card>
        <form onSubmit={formSubmit}>
          <label htmlFor="date">日期:</label>
          <input
            id="date"
            type="date"
            value={formData.dateV}
            onChange={dateChangeHandler}
          />
          <label htmlFor="desc">内容:</label>
          <input
            id="desc"
            type="text"
            value={formData.descV}
            onChange={descChangeHandler}
          />
          <label htmlFor="time">时长:</label>
          <input
            id="time"
            type="number"
            value={formData.timeV}
            onChange={timeChangeHandler}
          />
          <button>添加</button>
        </form>
      </Card>
    </div>
  );
};

export default LogsForm;

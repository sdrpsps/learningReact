import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './FilterMeals.module.scss';

const FilterMeals = (props) => {
  const inputOnChngeHandler = (e) => {
    const keyword = e.target.value.trim();
    props.onFilter(keyword);
  };
  return (
    <div className={classes.FilterMeals}>
      <div className="inputWrap">
        <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        <input className="searchInput" onChange={inputOnChngeHandler} type="text" placeholder="请输入关键字" />
      </div>
    </div>
  );
};

export default FilterMeals;

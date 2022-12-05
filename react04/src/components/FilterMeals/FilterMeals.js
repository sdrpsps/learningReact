import React, { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './FilterMeals.module.scss';

const FilterMeals = (props) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const inputOnChngeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  return (
    <div className={classes.FilterMeals}>
      <div className="inputWrap">
        <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        <input
          className="searchInput"
          value={keyword}
          onChange={inputOnChngeHandler}
          type="text"
          placeholder="请输入关键字"
        />
      </div>
    </div>
  );
};

export default FilterMeals;

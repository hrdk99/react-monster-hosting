import React from "react";
import '../search-box/search-box.component.css';

export const SearchBox = (props) => (
  <input className="search" placeholder={props.placeholderText} onChange={props.onChangeHandler} />
);

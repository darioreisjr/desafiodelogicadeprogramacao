import React, { cloneElement } from "react";
// import FamiliaMembro from './FamiliaMembro';

export default function Familia(props) {
  return (
    <div>
      {/* <FamiliaMembro nome="Pedro" sobrenome= {props.sobrenome} />
        <FamiliaMembro nome="Ana" {...props} />
        <FamiliaMembro nome="Gustavo" sobrenome="Ferreira"/> */}
      {/* {cloneElement(props.children , {...props})} */}

      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i});
      })}
    </div>
  );
}

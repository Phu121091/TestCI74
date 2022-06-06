import { useState } from "react";
import { useEffect } from "react";


const Form = ({submit,change,lan}) => {

  let place="";
  let sbm ="";
  {lan?place="Nhập công việc...":place="Enter task ..."};
  {lan?sbm="Tạo":sbm="Submit"};

    return (
      <form className="form" onSubmit={submit}>
        
        <input placeholder={place} onChange={change}/>
        <button>{sbm}</button>
      </form>
    );
  };
  
  export default Form;
  
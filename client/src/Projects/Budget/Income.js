
import React, { useState } from "react";

function Income() {

    const [show, setShow] =useState('hide')
    const [inputs, setInputs] = useState({
        source: "",
        amount: "",
      });
    
      const { source, amount } = inputs;

      const onChange = (e) =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });

      const onSubmit = (e) => {
          e.preventDefault();
          localStorage.setItem('source', source)
          localStorage.setItem('amount', amount)
      }

      const click = (e) => {
        show === 'hide' ? setShow('expand') : setShow('hide')
        }

    return (
        <div>
            <button onClick = {(e)=>click(e)}>+Income</button>
        <div className={show} style={{
            border: "1px solid gray",
            padding: "15px",
            backgroundColor: "#d4ebfd8e",
          }}>
             <h3>Add New Income</h3>
      <span>
        Income Source:{" "}
        <input
          style={{ marginLeft: "1px", marginRight: "8px", padding: "0px 55px" }}
          type="text"
          name="source"
          onChange={(e) => onChange(e)}
          value={source}
        />
      </span>
      <span>
        {" "}
        Income Amount: $
        <input
          style={{ marginLeft: "1px", marginRight: "8px", padding: "0px 5px" }}
          type="text"
          name="amount"
          onChange={(e) => onChange(e)}
          value={amount.replace(/,/g, "")}
          required
        />
      </span>{" "}
      <span>
        {" "}
        <button onClick={onSubmit}> Submit</button>
      </span>
        </div>
        </div>
    )
}

export default Income

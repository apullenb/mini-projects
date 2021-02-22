
import React, { useState, useEffect } from "react";

function Income() {

  const income = {
    src: [],
    amt: []
    }
  

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
          income.src.push(source)
          income.amt.push(amount)
          localStorage.setItem(source, )
           getIncome()
          setShow('hide')
          setInputs({
            source: "",
            amount: "",
          })
      }

      function getIncome() {
        localStorage.getItem('income')
       
      }

useEffect(() => {
  getIncome()
}, [])

      const click = (e) => {
        show === 'hide' ? setShow('expand') : setShow('hide')
        }

    return (
        <div>
          <section className='box'>
            <div className='title'>
            <h3>Expected Income</h3>
            </div>
        <div className='body'>
      {/* <h4>Source: {income.source} | Amount: ${income.amount}</h4> */}
        </div>
          </section>
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

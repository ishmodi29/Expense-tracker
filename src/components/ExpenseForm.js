import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import ChartElement from "./ChartElement";
// import InputNumber from "react-input-just-numbers";

function ExpenseForm() {
  const [lists, setList] = useState([{ id: "", title: "", amount: null }]);
  // const [amounts, setAmounts] = useState([]);
  const [total, setTotal] = useState(null);
  const [chartTitle, setChartTitle] = useState([]);
  const [chartAmount, setChartAmount] = useState([]);
  const inputRef = React.createRef()
  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.Title.value.trim();
    const amount = e.target.elements.Amount.value.slice(1);
    e.target.reset();
    setList([...lists, { id: lists.length, title, amount }]);
    setTotal(total + Number(amount));
    setChartTitle([...chartTitle, title]);
    setChartAmount([...chartAmount, amount]);
    if(total===null){
    document.querySelector(".charts").classList.remove('hidden')
    document.querySelector(".hidden").classList.remove('hidden')
  }
  inputRef.current.focus();
 
    //NumberFormat.value = ''
  };
  useEffect(()=>{
    inputRef.current.focus();
  })
  return (
    <div>
      <form onSubmit={onSubmit} className="addItems">
        <input
          type="text"
          name="Title"
          ref={inputRef}
          placeholder="Title"
          style={{ textTransform: "capitalize" }}
          required="Required"
        ></input>
        <div>
          <NumberFormat
            thousandSeparator={false}
            thousandsGroupStyle="lakh"
            prefix={"₹"}
            name="Amount"
            placeholder="Amount..."
            value=""
            required="Required"
          />
          <button type="submit">Add Items</button>
        </div>
      </form>

      <table className="hidden">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Amount</th>
          </tr>
          {lists.map((list, index) => {
            return (
              <tr style={{ listStyleType: "none" }} key={index}>
                <td style={{ textTransform: "capitalize" }}> {list.title} </td>
                <td> {list.amount}</td>
              </tr>
            );
          })}
          <tr>
            <td className="totalLine ">Total</td>
            <td className="totalLine ">{total}</td>
          </tr>
        </tbody>
      </table>
          <div className="charts hidden">
      {/* {console.log(lists[count].title)} */}
      <ChartElement amount={chartAmount} title={chartTitle} />
      </div>
    </div>
  );
}
export default ExpenseForm;

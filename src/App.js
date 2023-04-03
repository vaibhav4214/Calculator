import logo from './logo.svg';
import './App.css';



function App() {
  const operation=(e)=>
  {
    let btnVal=e.target.value
    let inp=document.querySelector("#inpute").value
    document.querySelector("#inpute").value=`${inp} ${btnVal} `


  }

  const calculate=(e)=>
  {
    let inp=document.querySelector("#inpute").value
    document.querySelector("#inpute").value=eval(inp);
  }
  const clear=(e)=>
  {
    document.querySelector("#inpute").value=""
  }
  return (  <>
              <div className="w-[350px] bg-[#ffffff]  h-[450px] m-[auto] mt-[10%] shadow-[2px_2px_5px_1px_black] grid grid-cols-4 grid-rows-6">
              <input type="text" id="inpute" className="col-span-4 text-right p-3 bg-[#666666c9] text-[20px]" />
              
              <button onClick={clear}  className="bg-[white]  border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >C</button>
              <button onClick={operation} className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >+/-</button>
              <button  onClick={operation} value="%" className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >%</button>
              <button onClick={operation} value="/" className=" border-[#666666c9] border-[1px] text-center hover:bg-[#9c5f1ec9] bg-[orange]" >/</button>

              <button onClick={operation} value="7" className="bg-[white]  border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >7</button>
              <button onClick={operation} value="8" className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >8</button>
              <button  onClick={operation} value="9" className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >9</button>
              <button onClick={operation} value="*" className=" border-[#666666c9] border-[1px] text-center hover:bg-[#9c5f1ec9] bg-[orange]" >*</button>


              <button onClick={operation} value="4"className="bg-[white]  border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >4</button>
              <button onClick={operation} value="5"className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >5</button>
              <button  onClick={operation} value="6"className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >6</button>
              <button onClick={operation} value="-" className=" border-[#666666c9] border-[1px] text-center hover:bg-[#9c5f1ec9] bg-[orange]" >-</button>



              <button onClick={operation} value="1"className="bg-[white]  border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >1</button>
              <button onClick={operation} value="2"className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >2</button>
              <button  onClick={operation} value="3"className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >3</button>
              <button onClick={operation} value="+" className=" border-[#666666c9] border-[1px] text-center hover:bg-[#9c5f1ec9] bg-[orange]" >+</button>

              <button onClick={operation} value="0" className="bg-[white]  border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9] col-span-2" >0</button>
              <button onClick={operation} value="."className="bg-[white] border-[#666666c9] border-[1px] text-center hover:bg-[#666666c9]" >.</button>
              <button onClick={calculate} className=" border-[#666666c9] border-[1px] text-center hover:bg-[#9c5f1ec9] bg-[orange]" >=</button>
              
           



              
              
              
              </div>
  
  </>
   
  );
}

export default App;

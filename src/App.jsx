import { useState ,useCallback, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
//  const [color, setcolor]= useState("black");
//  const [bg , setbg]=useState("red");data
const [data,setData]=useState("");

const[convertedCurr, setconvertedCurr]=useState('')
 async function currencyInfo(selectedCountry,convertedCurr){

 let value = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCountry}.json`);
 console.log(value);
 let a = await value.json();
 console.log("hi" , a)
 console.log(a[selectedCountry][convertedCurr]);
   setData(a[selectedCountry][convertedCurr]);
   
return data;
 }
function display(){
  currencyInfo(selectedCountry ,convertedCurr);
  console.log(data);
  console.log(selectedCountry);
  console.log(convertedCurr);
}


  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
    
  };
  const handleSelectChangeConverted = (event) => {
    setconvertedCurr(event.target.value);
    
  };




  const countryOptions = [
    { value: 'usd', label: 'United States (USD)' },
    { value: 'eur', label: 'Eurozone (EUR)' },
    { value: 'gbp', label: 'United Kingdom (GBP)' },
    { value: 'jpy', label: 'Japan (JPY)' },
    { value: 'cny', label: 'China (CNY)' },
    { value: 'cad', label: 'Canada (CAD)' },
    { value: 'aud', label: 'Australia (AUD)' },
    { value: 'inr', label: 'India (INR)' },
    { value: 'mxr', label: 'Mexico (MXN)' },
    { value: 'brl', label: 'Brazil (BRL)' },
  ];
  const countryOption = [
    { value: 'usd', label: 'United States (USD)' },
    { value: 'eur', label: 'Eurozone (EUR)' },
    { value: 'gbp', label: 'United Kingdom (GBP)' },
    { value: 'jpy', label: 'Japan (JPY)' },
    { value: 'cny', label: 'China (CNY)' },
    { value: 'cad', label: 'Canada (CAD)' },
    { value: 'aud', label: 'Australia (AUD)' },
    { value: 'inr', label: 'India (INR)' },
    { value: 'mxr', label: 'Mexico (MXN)' },
    { value: 'brl', label: 'Brazil (BRL)' },
  ];

  useCallback(()=>{
    currencyInfo();
  },[selectedCountry , convertedCurr]);
  return (
  <>
    
  
    <div className="max-w-xs mx-auto my-4">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <label htmlFor="countrySelect" className="block text-gray-700 font-bold mb-2">
        Select a Country:
      </label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleSelectChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md transition duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {countryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-4 font-semibold">Selected Currency: {selectedCountry}</p>
   
      <label htmlFor="countrySelec" className="block text-gray-700 font-bold mb-2">
        Select another Country:
      </label>
      <select
        id="countrySelec"
        value={convertedCurr}
        onChange={handleSelectChangeConverted}
        className="w-full px-4 py-2 border border-gray-300 rounded-md transition duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {countryOption.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-4 font-semibold">Selected Currency: {selectedCountry}</p>



   
    <button onClick={display}>Click me</button>

    <div class="bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-3xl font-semibold text-center mb-4">data</h1>
        <div class="text-4xl font-bold text-center text-blue-500">{data}</div>
    </div>


    </div>
    </>
  
  )
}
export default App;
import React, { useState } from 'react';
import AutoComplete from './autoComplete';
import data from '../Data';


const SearchPage  = (props) => {
  const [input] = useState('');
  const [] = useState();
  const [autoComplete, setAutoComplete] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // const fetchData = async () => {
  //   return await fetch('https://developers.google.com/places/web-service/autocomplete')
  //     .then(response => response.json())
  //     .then(data => {
  //       setAutoComplete(data) 
  //       setAutoCompleteDefault(data)
  //      });}

  // const updateInput = async (input) => {
  //    const filtered = autoCompleteDefault.filter(complete => {
  //     return complete.name.toLowerCase().includes(input.toLowerCase())
  //    })
  //    setInput(input);
  //    setAutoComplete(filtered);
  // }
  // useEffect(() => {
  //   setAutoComplete(data)
   
  // }, [])
	const setValue = (event)=>{
    const value= event.target.value;
    setSearchValue(value)
    if (value === ""){
      setAutoComplete([])
    }
    else {
      let filteredResult = data.filter(element => {
        return element.author.toLowerCase().includes(value.toLowerCase())
      })
      setAutoComplete(filteredResult)
    }
    
  }
  const buttonSearch = ()=>{
    let filteredResult = data.filter(element => {
      return element.author.toLowerCase().includes(searchValue.toLowerCase())
    })
    console.log(filteredResult)
    setAutoComplete(filteredResult)
  }
  const BarStyling = {width:"25rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const Styling = {width:"8rem",background:"#0059BF", color:"white", border:"50px", padding:"0.5rem"};
  const Style = {width:"300px",background:"#0059BF", color:"white", border:"50px", padding:"0.5rem", display: "flex", flex: "wrap"};
  return (
    <form>
        <h1>Roof inspection made remote and easy</h1>
        <div>Get your roof inspected remotely and connect with our trusted roofers </div> <br />
    <div class="input-icon">
        <input style={BarStyling}
          onChange = {(event)=>setValue(event)}
          key="random1" 
          value={searchValue}
          type="text" class="search-txt" placeholder="Enter your Address" />
        <button style={Styling}
          onClick={buttonSearch}>Get Inspection
        </button>
       <AutoComplete autoComplete={autoComplete}/>
    </div> <br />

  
        <div style={Style} className="rectangle5" >
        <div><a href="https://fontawesome.com/"><i class="fas fa-map-marker-alt"></i></a>Free Inspection</div>
        <div><a href="https://fontawesome.com/"><i class="fas fa-file-alt"></i></a> File a Claim</div>
        <div><a href="https://fontawesome.com/"><i class="fas fa-tools"></i></a>Replace or Repair a Roof</div>

            </div>
            
      
    </form>
    
   );

}
export default SearchPage

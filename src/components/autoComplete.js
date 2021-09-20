import React from 'react';

const AutoComplete  = ({autoComplete=[]}) => {
  return (
    <>
    { autoComplete.map((data,index) => {
        if (data) {
          return (
            <div key={index*5}>
              <h1>{data.author}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default AutoComplete
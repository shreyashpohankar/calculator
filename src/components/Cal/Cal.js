import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal =() => {

  const [inputVal1,setInputVal1] = useState(0);
  const [oprationValue,setOprationValue] = useState(0);
  const [currentOpration,setCurrentOpration] = useState('');

  const allBtArr = [
                  
    {value: 0, 
      btFun: () => {
      
      setInputVal1((prevValue) => parseInt(prevValue.toString()+0));
    },
  },

    {value: 1, btFun: () => {
     // const newValue =inputVal1.toString() +1;
     // setInputVal1(parseInt(newValue))

     setInputVal1((prevValue) => parseInt(prevValue.toString()+1));
    },
  },

    {value: 2, btFun: () => {
      
      const newValue =inputVal1.toString() +2;
       setInputVal1(parseInt(newValue))
    },
  },

    {value: 3, btFun: () => {
     
      const newValue =inputVal1.toString() +3;
       setInputVal1(parseInt(newValue))
    },
  }, 
       
  {value: 4, btFun: () => {
     
    const newValue =inputVal1.toString() +4;
     setInputVal1(parseInt(newValue))
  },
}, 

{value: 5, btFun: () => {
     
  const newValue =inputVal1.toString() +5;
   setInputVal1(parseInt(newValue))
},
}, 

{value: 6, btFun: () => {
     
  const newValue =inputVal1.toString() +6;
   setInputVal1(parseInt(newValue))
},
}, 

{value: 7, btFun: () => {
     
  const newValue =inputVal1.toString() +7;
   setInputVal1(parseInt(newValue))
},
}, 


{value: 8, btFun: () => {
     
  const newValue =inputVal1.toString() +8;
   setInputVal1(parseInt(newValue))
},
}, 


  
  ];

  

  const oprationArr = [         
                         
        {
           value: '+',
           btFun: () => {
                     setCurrentOpration('+');
                  setOprationValue(inputVal1);
                  setInputVal1(0);
                  
           }
          },
          {
              value: '-',
              btFun:() => {
                setCurrentOpration('-');
                setOprationValue(inputVal1);
                setInputVal1(0);

              }

          },
          {
            value: '*',
            btFun:() => {
              setCurrentOpration('*');
              setOprationValue(inputVal1);
              setInputVal1(0);

            }

        },
        {
          value: '/',
          btFun:() => {
            setCurrentOpration('/');
            setOprationValue(inputVal1);
            setInputVal1(0);

          }

      },
           {
              value: '=',
              btFun: () => {
                if(currentOpration === '+'){

                  setInputVal1((prevValue) => {
                    return prevValue + oprationValue

                  })

                }else if (currentOpration === '-') {

                  setInputVal1((prevValue) => {
                    return  oprationValue - prevValue 
                  
                } )
              }
                else if  (currentOpration === '*') {

                  setInputVal1((prevValue) => {
                    return  oprationValue * prevValue 
                  
                } )
              }
                else if  (currentOpration === '/') {

                  setInputVal1((prevValue) => {
                    return  oprationValue / prevValue 
                  
                } )
              }

        }
      }
  ];

return (
            <div>
                     <p> This is cal js {inputVal1} </p>
                     <p>  {currentOpration} {oprationValue} </p>
                     
       <CalWrapper  allBtArr={allBtArr}    oprationArr={oprationArr} />
            </div>


)

};

export default Cal;

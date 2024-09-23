import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
   let nameInputRef=useRef();
   let stateSelectRef=useRef();
   let resultParaRef=useRef();
   let maleRadioButtonRef=useRef();
   let femaleRadioButtonRef=useRef();
   let selectedGender;
   let selectedMaritalstatus;
   let languagesKnown = {
    telugu:false,
    english:false,
    hindi:false,
    tamil:false,
  
   }
  
   


   let onCreateAccount=()=>{
    
    if (stateSelectRef.current.value=="select State") {
      alert("Please select the state")
    } else {

      let salutation;

      if (selectedGender=="male") {
           salutation = "Mr.";
      }

      if (selectedGender=="female") {
        if(selectedMaritalstatus == "Single"){
           salutation = "Miss.";
        }
        else{
           salutation = "Mrs.";
        } 
      }
        console.log(languagesKnown);
     
       resultParaRef.current.innerHTML =`${salutation} ${nameInputRef.current.value} from ${stateSelectRef.current.value} knows ${languagesKnown
        .english==true?"English":""}
         ${languagesKnown.telugu==true?"Telugu":""}
          ${languagesKnown.hindi==true?"Hindi":""}
           ${languagesKnown.tamil==true?"Tamil":""}
        your account has been  
    successfully Created`
    }

   }

  return (
    <div className="App">
         <form className="fm">
          <h1>Sign up</h1>

        <div className="App">
        <label className="nm">Name</label>
        <input ref={nameInputRef}></input>
        </div>

        <div  className="App">  
        <label className="nm">DOB</label>
        <input></input>
        </div>

        <div  className="App">  
        <label className="internalLabel">languagesKnown</label>
        <input type="checkbox" onChange={(eventObj)=>{
         languagesKnown.telugu=eventObj.target.checked;
        }}></input>
      <label className="internalLabel">Telugu</label>
      <input type="checkbox" onChange={(eventObj)=>{
         languagesKnown.english=eventObj.target.checked;
        }}></input>
        <label className="internalLabel">English</label>
        <input type="checkbox" onChange={(eventObj)=>{
         languagesKnown.hindi=eventObj.target.checked;
        }}></input>
        <label className="internalLabel" >Hindi</label>
        <input type="checkbox" onChange={(eventObj)=>{
         languagesKnown.tamil=eventObj.target.checked;
        }}></input>
        <label className="internalLabel"  >Tamil</label>  
       
        </div>


        <div  className="App">  
        <label className="nm">Gender</label>
        <input type="radio" name="Gender" ref={maleRadioButtonRef} onChange={()=>{
          if (maleRadioButtonRef.current.checked==true) {
                selectedGender = "male"
          }
        }}></input>
        <label style={{width:"auto"}}>Male</label>
        <input type="radio" name="Gender" ref={femaleRadioButtonRef} onChange={()=>{
          if (femaleRadioButtonRef.current.checked==true) {
               selectedGender = "female"
            
          }
        }}></input>
        <label style={{width:"auto"}}>Female</label>
        </div>
       
        <div  className="App">  
        <label className="nm">Marital Status</label>
        <input type="radio" name="Marital status" onChange={(eventObj)=>{
          console.log(eventObj);
          if (eventObj.target.checked == true) {
              selectedMaritalstatus = "Single"
          }
        }}></input>
        <label style={{width:"auto"}}>Single</label>
        <input type="radio" name="Marital status" onChange={(eventObj)=>{
          console.log(eventObj);
          if (eventObj.target.checked == true) {
            selectedMaritalstatus = "Married"
        }
        }}></input>
        <label style={{width:"auto"}}>Married</label>
        </div>
       
        <div  className="App">  
        <label className="nm">Mobile No</label>
        <input></input>
        </div>

        <div  className="App">  
        <label className="nm" >State</label>
        <select ref={stateSelectRef} onChange={()=>{

          let selectedState = stateSelectRef.current.value;

        switch (selectedState) {
          case "AP":
          console.log("Amaravati");  
            break;
              case "Manipur":
                console.log("Imphal"); 
                break;
                
                  case "Himachal Pradesh":
                    console.log("Shimla"); 
                    break;  
                    
                      case "TamilNadu":
                        console.log("chennail");
                        break;
                        
                          case "West Bengal":
                            console.log("Kolkatta");  
                            break;
                            
                              case "Nagaland":
                                console.log("kohima");
                                break;
                               
                                  case "Karnataka":
                                    console.log("Banglore"); 
                                    break;                          
                                   default:
                                    console.log("not a valid section"); 
                                    break;
                                }
                                }}>
            
        
          <option>select State</option>
          <option value="AP">Andhra Pradesh</option>
          <option>Manipur</option>
          <option>Himachal Pradesh</option>
          <option>Tamil Nadu</option>    
          <option>Nagaland</option>
          <option>West Bengal</option> 
          <option>Karnataka</option>
        </select>
        </div>

       
        <div  className="App">  
        <label className="nm">place</label>
        <input></input>
        </div>
       
        
        
      <div  className="App">
       <button type="button" onClick={()=>{
        
        onCreateAccount();

       }}
       >
        sign up</button>
      </div>
      <p ref={resultParaRef}></p>
    </form>
    <br></br>
    <br></br>
    <Link to="/">Login</Link>
    </div>
  )
}

export default SignUp
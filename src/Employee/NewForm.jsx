
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { file } from "@babel/types";




const NewForm = () => {
let [empname,setEmpname]=useState('');
let [empid,setEmpid]=useState('');
let [empemail,setEmpemail]=useState('');
let [nomname,setNomname]=useState('');
let [nomid,setNomid]=useState('');
let [nomemail,setNomemail]=useState('');
// let [nomrel,setNomrel]=useState('');
let[state,setState]=useState(true);
let[pdf,setPdf]=useState('');
let [what,setWhat]=useState('');
let [how,setHow]=useState('');
let [benefits,setBenefits]=useState('');
let [myphoto,setMyphoto]=useState('');



let navigate=useNavigate()



let handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/review')
    try {
      await axios.post('http://localhost:8000/',{
        empname,empid,empemail,nomname,nomid,nomemail,what,how,benefits,myphoto
      })
    } catch (error) {
      console.log(error);
    }
  }

let updateProfilePic = (element) => {
  let file = element.currentTarget.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.onloadend = function() {
      console.log('RESULT', reader.result);
      setMyphoto(reader.result); 
  }
  reader.readAsDataURL(file);

  // Reset the form after selecting a file
  element.currentTarget.form.reset();
}

let updateProfilePics = (element) => {
  let file = element.currentTarget.files[0];
  console.log(file);
  let reader = new FileReader();
  reader.onloadend = function() {
      console.log('RESULT', reader.result);
      setPdf(reader.result); 
  }
  reader.readAsDataURL(file);

  // Reset the form after selecting a file
  element.currentTarget.form.reset();
}

    return (
        <section className="authBlock">
        <article>
        <div className="main-head">
        <h2>Employee Nominee Form</h2>
        </div>
          <form action="POST">
    <div className="main-form-div">
    <div className="form-group">
              <label htmlFor="name"><span>Nominator Name</span></label>
              <input
                type="text"
                id="name"
                name="empname"
                onChange={(e)=>setEmpname(e.target.value)}
                value={empname} required
              />
              <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Name</label>
            </div>
        
            <div className="form-group form-group1">
              <label htmlFor="ID"><span>Nominator ID</span></label>
              <input
                type="text"
                id="ID"
                name="empid"
                onChange={(e)=>setEmpid(e.target.value)}
                value={empid}
                required
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">ID</label>
            </div>
            <div className="form-group form-group2">
              <label htmlFor="email"><span>Nominator Email</span></label>
              <input
                type="email"
                id="email"
                name="empemail"
                onChange={(e)=>setEmpemail(e.target.value)}
                value={empemail}
                required
                minLength={13}
              />
                  <label id="aria-showelemslabel-Name1" elname="formSubInfoText" class="formSubInfoText">Email</label>
            </div>
    </div>

            <div className="form-group form-group-btn">
              <button onClick={handleSubmit}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 63.6">
                <rect width="265" height="63.6"/>
                <line class="cls-1" y1="2.5" x2="214" y2="2.5"/>
            </svg>
            <a href="">Submit</a></button>
            </div>
            </form>
            </article>
            </section>
    );
  };

  export default NewForm;
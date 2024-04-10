import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ReviewPage = ({data}) => {

    let navigate=useNavigate()
    const[collection,setCollection]=useState([]);
   

 
    useEffect(()=>{
        axios.get('http://localhost:8000/review/')
        .then(collection=>setCollection(collection.data))
        .catch(err=>console.log(err))
         },[])

      // Fetch data from the API when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);



  // const fetchData = () => {
  //   axios.get('http://localhost:8000/review/')
  //     .then(response => {
  //       setCollection(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // };



let handleSubmit = e => {
    navigate('/')
}



    return ( 

        <section className="authBlock1">
        <article>
      <table className="authTable" id="authTable">

        <tbody>
           {collection.map((col)=>{
            return(
                <tr key={col._id}>
                      <td>{col.empid}</td>
                    <td>{col.empname}</td>
                    <td>{col.empemail}</td>
                </tr>
            )
           })}
        </tbody>
      </table>
 
        </article>
        <div className="form-group1">
            <button onClick={handleSubmit}>Log Out</button>
            </div>
        </section>
     );
}
 
export default ReviewPage;
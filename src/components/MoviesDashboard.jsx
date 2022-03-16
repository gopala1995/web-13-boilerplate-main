import React, { useEffect, useState } from "react";
import axios from "axios"

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  
  //   // to get all movies list on component mounts
  

   const [deta,setData] = useState([])
 

  async function AllData(){
      var res = await axios.get("https://movie-fake-server.herokuapp.com/data")
      console.log(res.data);
      setData(res.data)
  }
    
  useEffect(() => {
    //   dispatch an action to the store 
    AllData()
  }, []);
  


//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className = "movies-list">
       {/* map throught th movie list and display the results */}
        {deta.map((el)=>{
          const  {id,image_url,movie_name,release_date} = el
          return(
            <div key ={id}>
               <h2>{el.movie_name}</h2>
               <img src={image_url} alt="" />
               <h3>{el.release_date}</h3>
            </div>
          )
        }
        )}
      </div>
    </>
  );
};

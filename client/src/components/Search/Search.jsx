import React, { useState } from "react"
import { Link } from "react-router-dom"
// import MainContainer from "../../container/MainContainer"

const Search = () => {
  const [selectTerm, updateSelectTerm] = useState('')

  
  const handleSelect = (e) => {
    console.log(e.target.value)
    updateSelectTerm(e.target.value)
  }
  
  return (
    <>
      <select className="ui dropdown"  onChange={handleSelect}>
        <option value=''>Select Date Idea</option>
        <option value="Biking Trails">Biking Trails</option>
        <option value='Boat Rentals'>Boat Rentals</option>
        <option value='Comedy Shows'>Comedy Shows</option>
        <option value='Cooking Class'>Cooking Class</option>
        <option value='Drive-Ins'>Drive-Ins</option>
        <option value='Outdoor Music'>Outdoor Music</option>
        <option value='Picnic Spots'>Picnic Spots</option>
        <option value='Rooftop Bars'>Rooftop Bars</option>
      </select>
      
      {/* <MainContainer updateSelectTerm={updateSelectTerm} /> */}
      <Link to="/dateideas" >
        <button onClick={handleSelect}>Select</button>
      </Link>
    </>
  )
}

export default Search

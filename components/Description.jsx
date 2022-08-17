import React, { useState,useEffect } from 'react'
import styles from '../styles/Description.module.css'

function Description(props) {
  const {planetClicked} = props


  // const {planetClicked} = {planetClicked}
  console.log("planet Clicked:",{planetClicked})
    const [planetDescription,setPlanetDescription]=useState(null)
    const url =   `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${planetClicked}`;
    
    const getFirstPageExtract = jsonResponse => {
        // You should probably add some validathin here to make sure pages exists
        const pages = jsonResponse.query.pages;
        const pageIds = Object.keys(pages);
        // Here we only take the first response since we know there is only one.
        const firstPageId = pageIds.length ? pageIds[0] : null;
        return firstPageId ? pages[firstPageId].extract : null;
      };

    const getDescription = async ()=>{
        const response = await fetch(url);
        const description = await response.json();
        console.log("descriptin:",description);
        const extract = getFirstPageExtract(description);
        setPlanetDescription(extract);

    }

    useEffect(()=>{
        getDescription();
    },[{planetClicked}]);

  return (
    <div className={styles.description}>
        {/* <h1>{nameOfChosenPlanet}</h1> */}
        {/* <p>{planetDescription}</p>    */}
           {planetDescription && <div dangerouslySetInnerHTML={{ __html: planetDescription }} />}

    </div>
  )
}

export default Description
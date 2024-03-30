  import { useState } from "react"
  import './BigCats.css'
/* I followed much of the MovieList examples from slides ~43-72 to try to 
develop this page.
*/


const currentCats = [
    {
        id: 1,
        name: "Cheetah",
        latinName: "Acinonyx jubatus",
        image: src="./images/cheetah",
    }, 
    {
        id: 2,
     name: 'Cougar',
     latinName: "Puma concolor",
     image: "./images/cougar",
    },
    {
        id: 3,
        name: "Jaguar",
        latinName: "Panthera onca",
        image: "./images/jaguar",
    },
    {
        id: 4,
        name: "Leopard",
        latinName: "Panthera pardus",
    },
    {
        id: 5,
        name: "Lion",
        latinName: "Panthera leo",
    },
    {
        id: 6,
        name: "Snow leopard",
        latinName: "Panthera uncia",
    },
    {
        id: 7,
        name: "Tiger",
        latinName: "Panthera tigris",
    }
  ]

function BigCats() {
    const [currentCats, sortCurrentCats] = useState({cats});
   
    const catItems = currentCats.map(cat => (
        <SingleCat 
        key={cat.id}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        />
    ));

const handleSortCurrentCats = () => {
        let newCats = [...currentCats];;
        newCats.sort();
        sortCurrentCats(newCats);
    }
    const handleReverseCurrentCats = () => {
        let newCats = [...currentCats];;
        newCats.reverse();
        reverseCurrentCats(newCats);
    }
    
    const handleFilterCurrentCats = () => {
        let newCats = [...currentCats.filter(cat => cat.latinName = 
            "Panthera" ? 'Panthera' : "Not in the Panthera family")];
        filterCurrentCats(newCats);
    }
  
    return (
      <div className="componentBox">
          <ul>
              {catItems}
          </ul>
          <button onClick={handleSortCurrentCats}>Sort List</button>
          <button onClick={handleReverseCurrentCats}>Reverse List</button>
          <button onClick={handleFilterCurrentCats}>Filter List (Panthera)</button>
      </div>
    );

  

  



  
}


  export default BigCats;

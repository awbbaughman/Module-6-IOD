  import './BigCats.css'
  
  const cats = [
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

        const catList = cats.map(cat => (
            <li key={cat.id}>
                <h3>{cat.name}</h3>
                <em>({cat.latinName})</em>
            </li>
        ))
    
    return (
        <div className="BigCats">
            <h2>Big Cats</h2>
            <ul>{catList}</ul>
        </div>
    );
}

function addCatForm({onAddCat}) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [imageURL, setImageURL] = useState('');

const handleAddCat = (e) => {
    e.preventDefault();
    onAddCat({name, latinName, image: imageURL});
}
return (
    <form onSubmit={handleAddCat}>
        <h3>Add New Cat</h3>
        <label>
            Name:
            <input name="name" value={name} onChange={(e)}></input>
        </label></form>);
}

function singleCat({name, latinName, image}) {

    const SingleCat = cats.map(cat => (
        <SingleCat
        key={cats.id} // key prop is required for lists
        name={cats.name}
        latinName={cats.latinName}
        image={cats.image}/>
        )
        );

            return (
                <li>
                <h3>{name}</h3> <span>({latinName})</span>
                <div>{image}</div>
                </li>
            )
        };


export default BigCats;

// I am certain that I am missing something small (but significant), like a function within a function.
// I would appreciate a quick review with a second set of eyes!
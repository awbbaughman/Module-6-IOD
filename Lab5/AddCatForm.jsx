import { useState } from "react"
import BigCats from "./BigCats";

function AddCatForm(BigCats) {
    const [name, setName] = useState({cats});
    const [latinName, setLatinName] = useState({cats});
    const [image, setImage] = useState({cats});

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image})
        }

        const onSubmit() = (e) => {
            // I got lost here on the delete part. Definite errors, even just glancing at the answers on Trello.
        }
        return (
            <div className="AddCatForm componentBox">
                <form onSubmit={handleSubmit}>
                    <label>Cat Name:
                        <input name="name" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>Cat Latin Name:
                        <input name="latinName" value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}/>
                    </label>
                    <label>Cat Image:
                        <input name="image" value={image}
                        onChange={(e) => setImage(e.target.value)}/>
                    </label>
                    <button>Add Cat</button>
                    <button onSubmit={()}>Delete Cat</button>
                </form>
                </div>
            )


}
export default AddCatForm;
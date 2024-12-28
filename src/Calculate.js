import axios from "axios";
import { useState } from "react";

const Calculate = () => {
    const [radius, setRadius] = useState(0);
    const handleSubmit = async () => {
        console.log("handle submit", radius);
        try {
            const response = await axios.post("http://localhost:5000/calculate", {
                radius: radius
            })
            console.log("response", response.data);
        } catch (err) {
            console.log("Error", err.message);

        }
    }
    return (
        <div>
            <h2>Calculate</h2>
            <input
                value={radius}
                onChange={(e) => { setRadius(e.target.value) }}
            />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>

    )
}

export default Calculate;
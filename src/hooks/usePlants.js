import { useEffect, useState } from "react"

const usePlants = () =>{
    const [plants, setPlants] = useState([]);
    useEffect(()=>{
        fetch('plants.json')
        .then(res => res.json())
        .then(data => setPlants(data));
    }, []);
    return [plants, setPlants];
}
export default usePlants;
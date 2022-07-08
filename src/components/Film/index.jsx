import axios from "axios";
import { useEffect, useState } from "react"

const Film = ({ url }) => {
    const [film, setFilm] = useState([]);

    const getFilm = async () => {
        const res = await axios.get(url);
        setFilm(res.data);
    }

    useEffect(() => {
        getFilm()
    })
    
    return <li className="list-group-item">{film.title}</li>
}

export default Film;
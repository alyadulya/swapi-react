import axios from "axios";
import { useEffect, useState } from "react";
import Film from "../../components/Film";

const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const getData = async () => {
        const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        setData(res.data.results);
        setCount(res.data.count);
    }

    useEffect(() => {
        getData()
    }, [page])

    const pagination = (page) => {
        var a = document.getElementsByTagName("a")
        setPage(a[page].getAttribute("value"))
    }

    return (
        <div className="container my-3">
            <h1>Characters of Star Wars</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 mb-3">
            {
                data.map((d, i) =>
                    <div className="col people" key={i}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{d.name}</h5>
                                <p className="card-text">Born in {d.birth_year} with {d.hair_color} hair and {d.skin_color} skin. Current height and mass are {d.height} cm and {d.mass} kg respectively.</p>
                            </div>
                            <div className="card-footer">
                                Films appeared in:
                            </div>
                            <ul className="list-group list-group-flush">
                                {
                                    data[i].films.map((f, i) =>
                                        <Film url={f} key={i} />
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#" value="1" onClick={() => pagination(1)}>1</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="2" onClick={() => pagination(2)}>2</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="3" onClick={() => pagination(3)}>3</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="4" onClick={() => pagination(4)}>4</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="5" onClick={() => pagination(5)}>5</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="6" onClick={() => pagination(6)}>6</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="7" onClick={() => pagination(7)}>7</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="8" onClick={() => pagination(8)}>8</a></li>
                    <li className="page-item"><a className="page-link" href="#" value="9" onClick={() => pagination(9)}>9</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
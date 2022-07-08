import axios from "axios";
import { useEffect, useState } from "react";
import Film from "../../components/Film";

const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getData = async () => {
        const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        setData(res.data.results);
    }

    useEffect(() => {
        getData()
    })

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
                                        <Film url={f} />
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                    <li class="page-item"><a class="page-link" href="#">8</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
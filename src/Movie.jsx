import { useEffect, useState } from "react";
import './style.css'
const Movie = ({ cart }) => {
    const [record, setRecord] = useState(cart);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortingCategory, setSortingCategory] = useState('All Movies');
    
    useEffect(() => {
        let filteredMovies = [...cart];
        if (searchQuery) {
            filteredMovies = filteredMovies.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (sortingCategory !== 'All Movies') {
            filteredMovies = filteredMovies.filter((item) => item.des === sortingCategory);
        }
    
    
        setRecord(filteredMovies);
    }, [searchQuery]);
    
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="img text-center mt-1">
                                <img src="Images/logo-4131033_1280.webp" alt="" style={{ width: '80px' }} />
                                <h4 style={{ color: 'gray' }}>Bluebird Movies</h4>
                            </div>

                            <div className="btn text-center">
                                <button style={{ border: 'none', backgroundColor: '#15171A', color: 'white', width: '160px', height: '35px', borderRadius: '5px' }}>Genres</button>

                                <button style={{ border: 'none', backgroundColor: '#15171A', color: 'white', width: '160px', height: '35px', borderRadius: '5px', margin: '20px 0' }}>Trending</button>

                                <button style={{ border: 'none', backgroundColor: '#15171A', color: 'white', width: '160px', height: '35px', borderRadius: '5px' }}>Upcoming</button>
                            </div>
                        </div>

                        <div className="col-10 p-0 ">
                            <div className="search p-5 text-center">
                                <input type="text" placeholder="search name" style={{ width: '60%', padding: '3px 15px', borderRadius: '5px', border: '0' }} onChange={(e) => setSearchQuery(e.target.value)} />
                            </div>

                            <div className="movie p-2 text-center">
                                <div className="btn ">
                                    <button style={{ border: 'none', backgroundColor: '#1E293B', color: 'white', width: '100px', height: '35px', borderRadius: '10px' }} >All Movies</button>

                                    <button style={{ border: 'none', backgroundColor: '#1E293B', color: 'white', width: '100px', height: '35px', borderRadius: '10px', margin: '0 15px' }}  >Action</button>

                                    <button style={{ border: 'none', backgroundColor: '#1E293B', color: 'white', width: '100px', height: '35px', borderRadius: '10px' }} >Comdey</button>

                                    <button
                                        style={{ border: 'none', backgroundColor: '#1E293B', color: 'white', width: '100px', height: '35px', borderRadius: '10px',margin: '0 15px' }}  
                                    >
                                        Drama
                                    </button>
                                </div>
                                <div className="row">
                                    {
                                        record.map((item) => {
                                            const { des, img, name, categary, price } = item;
                                            return (
                                                <div className="movielist col-3 text-center ms-5">
                                                    <div className="book">
                                                        <div className="img pt-2">
                                                            <img src={img} alt="" className="w-100" />
                                                        </div>
                                                        <div className="name">
                                                            <h3 style={{ color: 'white' }}>{name}</h3>
                                                        </div>
                                                        <div className="cat">
                                                            <h4 style={{ color: 'white' }}>{categary}</h4>
                                                        </div>
                                                        <div className="price">
                                                        <h6 style={{ color: 'white' }}>description:- {des}</h6>
                                                            <h4 style={{ color: 'white' }}>Ticket Price: {price}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movie;
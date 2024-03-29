import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom";

const All_MOVIES = gql`
    query getMovies {
        allMovies{
            title
            id
        }
    }
`

export default function Movies(){
    const {data,loading,error} = useQuery(All_MOVIES)

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Could not fetch :</h1>
    }

    return (
        <ul>
            <h1>Movie List</h1>
            {data.allMovies.map(movie=>
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            )}
        </ul>
    )
}
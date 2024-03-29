import { gql, useApolloClient } from "@apollo/client"
import { useEffect, useState } from "react"

export default function Movies(){
    const client = useApolloClient()
    const [movies,setMovies] = useState()

    useEffect(()=>{
        client.query({
            query:gql`
                {
                    allMovies{
                        title
                    }
                }
            `
        }).then(results=>{
            console.log(results)
            setMovies(results.data.allMovies)
        })
    },[client])

    return (
        <div>
            {!movies && 
                <div>
                    영화 데이터를 불러오지 못했습니다.
                </div>
            }
            <div>
                {movies?.map((movie)=>(
                    <li key={movie.id}>
                        {movie.title}
                    </li>
                    )
                )}
            </div>
        </div>
    )
}
import {useState, useEffect, useRef} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [page, setPage] = useState(1);

    const controlerRef = useRef(null);

    useEffect(() => {

        const fetchPosts = async () => {
            controlerRef.current?.abort()
            controlerRef.current = new AbortController();

            setLoading(true)

        try{
            const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                signal: controlerRef.current?.signal,
            })
            const data = await response.json()
            setPosts(data)

        } catch (e) {
                if (e.name == "AbortError"){
                    console.log("Abort Error: ", e)
                    return
                }
            setError(e)

        }finally {
            setLoading(false)
        }



        }
// https://jsonplaceholder.typicode.com/posts?page=1
        // executar a func
        fetchPosts()

    }, [page])


    if (error) {
        return <h1>Erro</h1>
    }

    /*
    if (loading) {
        return <h1>is Loading</h1>
    }
*/


  return (
    <>
        <h1 className="mb-4">Load API demo</h1>

        <button  className="btn btn-primary"
                 onClick={()  => {
                     setPage((page) => page + 1)
                 }
        }
        >
            next page {page}
        </button>


        {loading && <h1>is Loading</h1> }

        {!loading &&
        <div className="max-w-7xl mx-auto">
            <ul className="list-unstyled">
                {posts.map((post) => (
                    <>
                        <li key={post.id}> { post.title }</li>
                        <hr />
                    </>
                ))}

            </ul>
        </div>
        }
    </>
  )
}

export default App

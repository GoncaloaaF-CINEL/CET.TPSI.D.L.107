import {useState, useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {

            const response = await fetch(`${BASE_URL}/posts`, {})

            const data = await response.json()

            setPosts(data)
        }

        fetchPosts()
    }, [])


  return (
    <>
        <h1 className="mb-4">Load API demo</h1>

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

    </>
  )
}

export default App

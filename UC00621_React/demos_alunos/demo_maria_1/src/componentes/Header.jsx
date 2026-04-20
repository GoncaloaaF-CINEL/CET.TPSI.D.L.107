import { useState } from 'react'

import Hero from "./Hero.jsx";

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center">

                <Hero />


                <div>
                    <h1>Get started</h1>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                    </p>
                </div>
                <button
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
            </section>

        </>
    )

}

export default Header
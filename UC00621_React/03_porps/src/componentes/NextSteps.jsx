
import Docs from "./Docs.jsx";
import Social from "./Social.jsx";


function NextSteps() {
    return (
        <>
            <section id="next-steps">

                <Docs />

               <Social
                   titulo="Connect with us"
                   description="Join the Vite community"
                    icon="social-icon"
               />
                
            </section>

        </>
    )

}

export default NextSteps;
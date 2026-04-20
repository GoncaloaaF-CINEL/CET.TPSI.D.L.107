const lista =  [
    { nome: "GitHub", iconSvg: "github-icon", link: "https://github.com/vitejs/vite" },
    { nome: "Discord", iconSvg: "discord-icon", link: "https://chat.vite.dev/" },
    { nome: "X.com", iconSvg: "x-icon", link: "https://x.com/vite_js" },
    { nome: "Bluesky", iconSvg: "bluesky-icon", link: "https://bsky.app/profile/vite.dev" },
]



export default function Social({titulo, description, icon}) {

    return (
        <>

            <div id="social">
                <svg className="icon" role="presentation" aria-hidden="true">
                    <use href={ `icons.svg#${ icon }` }></use>
                </svg>
                <h2> { titulo } </h2>
                <p>{ description }</p>
                <ul>

                    <li>
                        <a href="https://github.com/vitejs/vite" target="_blank">
                            <svg
                                className="button-icon"
                                role="presentation"
                                aria-hidden="true"
                            >
                                <use href="/icons.svg#github-icon"></use>
                            </svg>
                            GitHub
                        </a>
                    </li>

                </ul>
            </div>

        </>
    )

}
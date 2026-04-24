import {NavLink, Outlet} from "react-router-dom";


function Pag2() {

    const lista = [1,2,3,4,5,6]
    return (
        <>
            <h1>Lista de utilzadores</h1>

            <ul>
                {
                    lista.map(
                        (id) => (
                            <li key={id}>
                                <NavLink to={`/utilzadores/${id}`}
                                style={ ({ isActive }) => (
                                    {
                                     color: isActive ? "red" : "black"
                                    }
                                )




                                }
                                >
                                    User { id }
                                </NavLink>
                                
                            </li>
                        )
                    )
                }

            </ul>

            <Outlet />

        </>
    );
}

export default Pag2;
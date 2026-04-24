
    import React from 'react';

    function Card1({img, title, description, btn}) {
        return (
            <>
                <div className="card" style={{margin: '20px', width: '18rem'}}>
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"> {description}</p>
                        <a href="#" className="btn btn-primary">{btn}</a>
                    </div>
                </div>
            </>
        );
    }

    export default Card1;

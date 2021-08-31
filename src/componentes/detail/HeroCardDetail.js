const HeroCardDetail = ({
        characters,
        first_appearance,
        id,
        publisher,
        superhero,
        back,
        length,
        push
}) => {
    const handlerToBack = length => {
        if(length <= 2) {
            push('/')
        }else {
            back()
        }
    }
    return (
       <div className="row">
           <div className="col-12">
           <div className="d-flex justify-content-center animate__animated animate__zoomIn" style={{maxWidth: 100 + '%'}}>
            <div className="card mt-5" style={{maxWidth: 100 + '%'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title my-3 text-center">{superhero}</h3>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Company</div>
                                        {publisher}
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Name</div>
                                        {characters}
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">First Appearance</div>
                                        {first_appearance}
                                    </div>
                                </li>
                            </ul>
                        <button 
                            className="btn btn-outline-primary"
                            onClick={ () => handlerToBack(length) }
                            >Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           </div>
       </div>
    )
}

export default HeroCardDetail

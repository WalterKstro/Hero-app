import React from 'react'
const HomePage = () => {
    
    return (
        <div className="row">
            <div className="home col d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                <main>
                    <h1>Frontend Developer</h1>
                    <address>
                        <strong>Walter Castro</strong>
                        <strong className="d-block">
                            <a href="mailto:walterkstro@gmail.com">walterkstro@gmail.com</a>
                        </strong>
                        <p>City Guatemala</p>
                    </address>
                </main>
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/assets/linkedin.jpeg`} alt="Code QR LinkedIn"/>
                </figure>
            </div>
        </div>
    )
}

export default HomePage

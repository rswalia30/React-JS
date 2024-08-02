// import React from 'react';

export const Footer = () => {
    return (
        <>
            <footer className="text-center bg-body-tertiary footer fixed-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                {/* Grid container */}
                <div className="container pt-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        {/* Twitter */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>

                        {/* Google */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-google"></i>
                        </a>

                        {/* Instagram */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        {/* Linkedin */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>

                        {/* Github */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3">
                    © 2024 |
                    <a className="text-body" href="https://mdbootstrap.com/" > Rohit Singh Walia</a>
                </div>
                {/* Copyright */}
            </footer>
        </>
    )
}

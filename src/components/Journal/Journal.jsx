import React from "react"
import { Link, NavLink } from "react-router-dom"

function Journal() {
    return (
        <>
            <div className="container-fluid bg-dark py-4">
                <div className="container">
                    <div className="row ">
                        <div className="text-center col-lg-12 col-md-12 col-12">
                            <p className="text-warning fs-5">My Blog</p>
                            <h1 className="text-light fw-bold pb-5 display-3">Recent Writings</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light py-5">
                <div className="container px-4 py-5" id="featured-3">
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <p className="text-warning">Sponsored</p>
                            <h3 className="fw-semibold text-body-emphasis">Need Web Hosting for Your Websites?</h3>
                            <p>Need hosting for your website? We would highly recommend DreamHost. Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control panel to make managing your websites and projects easy. Sign up now to get started.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">SEO</p>
                            <h3 className="fw-semibold text-body-emphasis">7 SEO Factors to Consider for Better Website Ranking</h3>
                            <p>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>

                        <div className="feature col">
                            <p className="text-warning">Web Design</p>
                            <h3 className="fw-semibold text-body-emphasis">5 Effective Web Design Principles</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Productivity</p>
                            <h3 className="fw-semibold text-body-emphasis">The Advantages of Hiring a Consultant Rather Than An Employee Or An Agency</h3>
                            <p>Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Productivity</p>
                            <h3 className="fw-semibold text-body-emphasis">5 Marketing Productivity Apps for Your Team</h3>
                            <p>Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Marketing</p>
                            <h3 className="fw-semibold text-body-emphasis">How to Determine the Reach of Your Campaign</h3>
                            <p>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">SEO</p>
                            <h3 className="fw-semibold text-body-emphasis">The Complete Guide to Redirects</h3>
                            <p>Eaque velit eligendi ut magnam.Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">SEO</p>
                            <h3 className="fw-semibold text-body-emphasis">What Backlinks Are & Why They Are Important for SEO</h3>
                            <p>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Marketing</p>
                            <h3 className="fw-semibold text-body-emphasis">Why Is Data-Driven Marketing Important?</h3>
                            <p>Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>

                        <div className="feature col">
                            <p className="text-warning">Marketing</p>
                            <h3 className="fw-semibold text-body-emphasis">How to Develop Successful Marketing Strategies</h3>
                            <p>Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Keyword Research</p>
                            <h3 className="fw-semibold text-body-emphasis">What Exactly Are Keywords? How to Make Use of Them for SEO</h3>
                            <p>Rem neque et voluptatem eos quia sed eligendi et. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>

                        </div>
                        <div className="feature col">
                            <p className="text-warning">Sponsored</p>
                            <h3 className="fw-semibold text-body-emphasis">Need Web Hosting for Your Websites?</h3>
                            <p>Need hosting for your website? We would highly recommend DreamHost. Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control panel to make managing your websites and projects easy. Sign up now to get started.</p>

                        </div>

                    </div>
                    <div className="row">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <NavLink to='#' className="page-link">Previous</NavLink>
                                </li>
                                <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
                                <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                                <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                                <li className="page-item">
                                    <NavLink className="page-link" to="#">Next</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark py-5">
                <div className="container text-center py-5">
                    <div className="row">
                        <main className="px-3 col-lg-8 mx-auto">
                            <h1 className="text-light display-4 fw-bold pb-4">Get started with a consultation today.</h1>
                            <p className="lead text-light pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rem, esse doloribus sint eaque at debitis enim vitae minus expedita ratione dignissimos sit nostrum optio sequi. Ipsa at beatae quam.</p>
                            <p className="lead">
                            <NavLink to="/about" className="btn btn-lg btn-warning fs-5  bg-warning">Let's Work Together</NavLink>                            </p>
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Journal
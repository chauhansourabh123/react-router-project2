import { React } from "react";
import './Home.css'
import {NavLink} from "react-router-dom"

function Home() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="container py-5">
                    <div className="row pb-0 pe-lg-0 pt-lg-5 d-flex justify-content-between">
                        <div className="col-lg-8 p-3 pt-lg-3 ">
                            <p className="fs-5 text-light">
                                Hello I'am Monica
                            </p>
                            <h1 className="display-1 fw-bold lh-1 text-light mb-5">I create marketing
                                strategies for your
                                business that get
                                results.</h1>

                            <div className="d-flex align-items-center gap-3">
                                <i className="bi bi-arrow-down text-light border rounded-circle px-2 py-1 fs-5"></i>
                                <p className="text-light mt-2">Scroll for more</p>
                            </div>
                        </div>
                        <div className="image col-lg-4 mt-5">
                            <img className="img-fluid" src="../src/Images/about-2400.jpg" />
                        </div>
                    </div>

                    {/* Inspiration portion */}
                    <div className="row d-flex justify-content-between pb-5 pt-5">
                        <div className="col-lg-5 py-5">
                            <p className="text-warning fs-5">About</p>
                            <h1 className="display-4 text-light fw-bold">An inspiring headline about yourself.</h1>
                            <button type="button" className="btn btn-outline-secondary my-5 px-5 py-3 border-light"><NavLink to="/about" className="text-decoration-none text-light">More About Me</NavLink></button>
                            <div className="col-lg-6 mx-4">
                                <i className="bi bi-facebook mx-2  text-light fs-4"></i>
                                <i className="bi bi-twitter mx-2  text-light fs-4"></i>
                                <i className="bi bi-instagram mx-2 text-light fs-4"></i>
                                <i className="bi bi-xbox  mx-2 text-light fs-4"></i>
                            </div>
                        </div>
                        <div className="col-lg-6 py-5">
                            <p className="text-light fs-5 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque.</p>

                            <p className="text-light fs-5 pt-2">Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.</p>

                            <p className="text-light fs-5 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos iure, eos consequatur est deleniti cum id aliquid neque</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* white Portion */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row d-flex justify-content-between pb-5 pt-5 bg-light">
                        <div className="col-lg-5">
                            <p className="text-warning fs-5">Expertise</p>
                            <h1 className="display-4 fw-bold text-black">My key areas of expertise.</h1>
                            <p className="fs-5 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit debitis quam dignissimos veritatis atque pariatur magnam obcaecati fugit reprehenderit vel numquam facere esse est deserunt, perferendis commodi voluptatem similique.</p>
                            <button type="button" className="btn btn-outline-black my-2 px-5 py-3 border-black "><NavLink to="/services" className="text-black text-decoration-none">View All Services</NavLink></button>
                        </div>
                        <div className="col-lg-6  py-5">
                            <div>
                                <h3 className="text-black fw-semibold"><span className="text-warning fs-5">01.</span>Digital Marketing</h3>
                                <p className="text-black py-3">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                            </div>
                            <div>
                                <h3 className="text-black fw-semibold"><span className="text-warning fs-5">02.</span>Project Management</h3>
                                <p className="text-black py-3">Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                            </div>
                            <div>
                                <h3 className="text-black fw-semibold"><span className="text-warning fs-5">03.</span>Content Marketing</h3>
                                <p className="text-black py-3">Eaque velit eligend. iQuibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                            </div>
                            <div>
                                <h3 className="text-black fw-semibold"><span className="text-warning fs-5">02.</span>Research & Discovery</h3>
                                <p className="text-black py-3">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client Section */}
            <div className="container-fluid bg-danger bg-opacity-10 py-5">
                <div className="container py-5">
                    <div className="row py-5 d-flex justify-content-between">
                        <div className="col-lg-5">
                            <p className="text-warning fs-5">Client</p>
                            <h1 className="display-4 fw-bold text-black">I have had the privilege of working with these incredible brands.</h1>
                        </div>
                        <div className="col-lg-6 py-5">
                            <p className="fs-5">Quibusdam quis autem voluptatibus earum vel ex error ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit debitis quam dignissimos veritatis atque pariatur magnam obcaecati fugit reprehenderit vel numquam facere esse est deserunt, perferendis commodi voluptatem similique.</p>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam molestiae vel quaerat quas facilis voluptates rerum aspernatur quam voluptatem ea, vitae illo, omnis minus vero minima maiores quia nihil incidunt provident debitis ab qui quasi. Iure unde numquam in nulla praesentium nesciunt dolore exercitationem, odit expedita minima quisquam ullam ex. Aut perferendis vel consectetur modi esse. Temporibus reprehenderit alias magni atque repellat aspernatur voluptates, accusantium pariatur libero ad nesciunt illum labore facere. Earum iure consequatur cumque omnis maiores optio.</p>
                        </div>
                    </div>

                    <div className="row  row-cols-4">
                        <div className="borderCollapse col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/flash.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/rise.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/cactus.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/pinpoint.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/proline.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/vision.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/volume.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/hitech.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/terra.svg" alt="" />
                        </div>
                        <div className="col border border-secondary p-4">
                            <img className="img-fluid" src="./src/clients/chain.svg" alt="" />
                        </div>
                    </div>

                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col pt-5">


                            <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias.</p>

                            <div className="userImage d-flex gap-2">
                                <img className="rounded-circle" src="./src/user-01.jpg" />
                                <p>John Rockfeller <br />Standard Oil co.</p>

                            </div>
                        </div>
                        <div className="feature col pt-5">


                            <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias.</p>

                            <div className="userImage d-flex gap-2">
                                <img className="rounded-circle" src="./src/Images/user-04.jpg" />
                                <p>John Rockfeller <br />Carnegie Steel co.</p>

                            </div>

                        </div>
                        <div className="feature col pt-5">
                            <p>Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias.</p>


                            <div className="userImage d-flex gap-2">
                                <img className="rounded-circle" src="./src/Images/user-06.jpg" />
                                <p>John Rockfeller <br />Ford Motor co.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Get started  Footer */}
            <div className="container-fluid bg-dark py-5">
                <div className="container text-center py-5">
                    <div className="row">
                        <main className="px-3 col-lg-8 mx-auto">
                            <h1 className="text-light display-4 fw-bold pb-4">Get started with a consultation today.</h1>
                            <p className="lead text-light pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis rem, esse doloribus sint eaque at debitis enim vitae minus expedita ratione dignissimos sit nostrum optio sequi. Ipsa at beatae quam.</p>
                            <p className="lead">
                                <NavLink to="/about" className="btn btn-lg btn-warning fs-5  bg-warning">Let's Work Together</NavLink>
                            </p>
                        </main>
                    </div>
                </div>
            </div>

            {/* second last section */}

            <div className="container-fluid lastHome  border-bottom border-secondary">
                <div className="container py-5">
                    <div className="row pb-3">
                        <div className="col-lg-10 text-center mx-auto">
                            <p className="text-warning fs-5">Recent Article</p>
                            <h1 className="text-light display-4 fw-bold">Latest articles from my blog.</h1>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between flex-wrap py-5">
                        <div className="col-lg-4">
                            <p className="text-warning">Sponsored</p>
                            <h3 className="text-light fw-bold">Need Web Hosting for Your Websites?</h3>
                            <p className="text-secondary pt-3">Need hosting for your website? We would highly recommend DreamHost. Enjoy 100% in-house support, guaranteed performance and uptime, 1-click installs, and a super-intuitive control panel to make managing your websites and projects easy. Sign up now to get started.</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="text-warning">Productivity</p>
                            <h3 className="text-light fw-bold">5 Marketing Productivity Apps for Your Team</h3>
                            <p className="text-secondary pt-3">Rerum quam quos. Quibusdam quis autem voluptatibus earum vel ex error ea magni. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="text-warning">SEO</p>
                            <h3 className="text-light fw-bold">7 SEO Factors to Consider for Better Website Ranking</h3>
                            <p className="text-secondary pt-3">Quibusdam quis autem voluptatibus earum vel ex error ea magni. Rerum quam quos. Aut asperiores sit mollitia. Rem neque et voluptatem eos quia sed eligendi et. Eaque velit eligendi ut magnam. Cumque ducimus laborum doloribus facere maxime vel earum quidem enim suscipit.</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="text-warning">Productivity</p>
                            <h3 className="text-light fw-bold">5 Effective Web Design Principles</h3>
                            <p className="text-secondary pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam et laborum aperiam. Dignissimos quae voluptatibus ullam esse sapiente fugiat, rerum labore cupiditate obcaecati dolore necessitatibus id magni rem officia dolor nam sit laudantium. Quo eaque eveniet quibusdam unde.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home



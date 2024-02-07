import React from "react";

function Contact() {
    return (
        <>
            <div className="container-fluid bg-dark py-4">
                <div className="container">
                    <div className="row ">
                        <div className="text-center col-lg-12 col-md-12 col-12">
                            <p className="text-warning fs-5">Contact</p>
                            <h1 className="text-light fw-bold pb-5 display-3">Get In Touch</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5">
                            <h1 className="display-4 fw-bold">Let's take your business to the next level.</h1>
                        </div>
                        <div className="col-lg-6 py-3 fs-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur. Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo.</p>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-12 col-md-12 col-12">
                            <img className="img-fluid" src="./src/Images/contact.jpg" alt="" />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center pt-5">
                        <div className="col-lg-5">
                            <h2 className="fw-bold">Let's Work Together</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quisquam voluptatibus debitis aperiam ratione. Officia, suscipit iure, tenetur eum consequatur, consequuntur omnis accusamus odit quod pariatur excepturi architecto veniam. Soluta modi dignissimos libero blanditiis at saepe doloribus temporibus illo facilis dolorem, aliquam obcaecati accusamus nihil laboriosam, esse vel. Quod, vitae.</p>

                            <div className="d-grid gap-2 pt-4">
                                <button className="btn btn-warning py-3" type="button">Send Me An Email</button>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5 px-5">

                            <div>
                                <h6 className="mx-2">FOLLOW ON SOCIAL</h6>
                                <i className="bi bi-facebook mx-2 text-dark fs-4"></i>
                                <i className="bi bi-twitter mx-2 text-dark fs-4"></i>
                                <i className="bi bi-instagram mx-2 text-dark fs-4"></i>
                                <i className="bi bi-xbox  mx-2 text-dark fs-4"></i>
                            </div>

                            <div className="pt-3 mx-2">
                                <h6>EMAIL</h6>
                                <p>sourabhchauhan12@gmail.com</p>
                            </div>

                            <div className="pt-3 mx-2">
                                <h6>PHONE</h6>
                                <p>+197 542 3654</p>
                                <p>+197 123 9876</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-danger bg-opacity-10 py-4">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-12 col-12 text-center">
                            <p className="text-warning fs-5">Testimonials</p>
                            <h3 className="fw-bold">Reviews From Real Clients</h3>
                        </div>
                    </div>
                    <div className="row g-4 pb-5 row-cols-1 row-cols-lg-3">

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

        </>
    )
}

export default Contact
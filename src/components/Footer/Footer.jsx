import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <footer className="py-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5">
                            <h3 className="text-white fw-bold">About Monica</h3>
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis neque voluptatem repellat eveniet voluptatum quas saepe rerum unde non, natus cum molestias optio adipisci ut nihil laborum. Aliquid quisquam mollitia ducimus harum debitis voluptatibus explicabo dolor iure? Asperiores maxime iusto, libero labore, consequuntur facere at, praesentium odit eos corrupti laudantium!</p>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="text-white fw-bold">Site Links</h3>
                            <ul>
                                <li>
                                    <NavLink className="text-secondary text-decoration-none" to=''>Home</NavLink>
                                </li>
                                <li><NavLink className="text-secondary text-decoration-none" to=''>Services</NavLink></li>
                                <li> <NavLink className="text-secondary text-decoration-none" to=''>Journal</NavLink></li>
                                <li> <NavLink className="text-secondary text-decoration-none" to=''>About</NavLink></li>
                                <li><NavLink className="text-secondary text-decoration-none" to=''>Contact</NavLink></li>
                                <li><NavLink className="text-secondary text-decoration-none" to=''>DreamHost</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="text-white fw-bold">Newsletter</h3>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, totam magnam perferendis.</p>

                            <button type="button" className="ftbtn tranparentbtn btn text-secondary px-5 py-3 mb-3 btn-body">Your Email Address</button>
                            <button type="button" className="ftbtn btn btn-warning px-5 py-3">Subscribe</button>

                        </div>
                    </div>

                    <div className="row pt-4 d-flex justify-content-between">
                        <div className="col-lg-5">
                            <i className="bi bi-facebook mx-2  text-light fs-3"></i>
                            <i className="bi bi-twitter mx-2  text-light fs-3"></i>
                            <i className="bi bi-instagram mx-2 text-light fs-3"></i>
                            <i className="bi bi-xbox  mx-2 text-light fs-3"></i>
                        </div>
                        <div className="col-lg-4">
                            <p className='text-secondary'>&#169; Copyright Monica 2024</p>
                            <p className="text-secondary">Design by <span className="text-light">Sourabh Chauhan</span> Distribution by <span className="text-light">Nikita Thakur</span></p>
                        </div>
                        <div className='col-lg-2 mt-4'>
                        <i className="bi bi-arrow-up text-light border rounded-circle px-3 py-2 fs-3"></i>
                        </div>
                    </div >
                </footer>
            </div>
        </div>
    )
}

export default Footer
import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Darshan Padmane</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">UG EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">MCA - Computer Science</h4>
                                <h6 className="blue-label px-2 py-1">aug 2022 - july 2024</h6>
                                <p className="m-0">Sant Gadge Baba Amravati University</p>
                                <p>Grade: till 68.35</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                                <h6 className="blue-label px-2 py-1">jan 23 - jun 2023</h6>
                                <p className="m-0">turtleTech Sai · Internship</p>
                                <p>remote, Nagpur, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">UG EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BCA - Computer Science</h4>
                                <h6 className="blue-label px-2 py-1">2019- 2022</h6>
                                <p className="m-0">Sant Gadge Baba Amravati University</p>
                                <p>Grade: 77.25</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2018-2019</h6>
                                <p className="m-0">Rastrapita MG High School</p>
                                <p>Grade: 60.00 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/darshandp28" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/darshanpadmanedp" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume
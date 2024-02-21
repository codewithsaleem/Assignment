import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active mr-4">
                            <img className="img1" src="https://s3-alpha-sig.figma.com/img/76b4/0c12/bab4d20856c3962d4a42e0d1e593fa55?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FBF3JhjPuIyLCNcUwTJXZtMhWliAWWrQ1b1d1rHkizqOP2drwYMK-A3ADvfRpu5efg0BGyJFde--21QF68u-XXPkk9Ic0p4fn2JLnoc5AJzl3uRW4e37cKdT9BPwop9yai7Y8C1SFrBc6~XGYxmZXes7YoEzZjAYK6uMzXCKuFyVgCBWnDt1IoMvgQqnCefiAOb4HENM8fSr4r95j7OmusR7Rj2hG5swa2xEY2p4~q1X6L2ROqM---2sb3stzwDYFlK2OR~ltvXQfU~blDxvyFmXIrRuo92~jB~0Jd1bkGe2JWRv-tGB2SmpwBo1MP2pdppWMfPms~pBMzGKXXZTrw__" alt="" />
                        </li>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="mr-sm-2 inp1" type="search" placeholder="Search For brand, category, coupon" aria-label="Search" />
                        </form>
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">
                                <button className="btn btn-danger">LOGIN / SIGN UP</button>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">Deals <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">Coupon <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">Stores <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active mr-4">
                            <a className="nav-link" href="#">Contact Us <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

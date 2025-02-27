import React, { useEffect, useState } from 'react'
import './index.css'
import { Link, Route, Routes } from 'react-router-dom'
import Cat from './Cat'
import Home from './Home'
import Details from './Details'

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0px";
document.getElementById("navbar").classList.add('fixed-top');

  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.remove('fixed-top');
  }
}
function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);
    let [category,setCategory] = useState([])
        useEffect(() => {
          fetch('https://laghubittanews.com/wp-json/wp/v2/categories').then(res=>res.json()).then(a=>setCategory(a))
        }, []);
  return (
    <>
        <div className="container-fluid  bg-success">
            <div className="container">
                <div className="top row py-2">
                    <div className="col-6 text-white fs-5">
                        <p className='d-flex items-center'><i className="fa-regular fa-calendar-days ps-0 px-3" /><iframe scrolling="no" border="0" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=ffffff&font_size=16&bikram_sambat=0&api=712124p144" width="165" height="22"></iframe></p>
                    </div>
                    <div className="col-6 text-end text-white">
                    <a href="#" className='text-decoration-none text-white'><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <section className='mx-2'>
            <div className="container">
                <div className="row my-2 top">
                    <div className="col-lg-4">
                        <Link to={`/`}><img className='w-100' src="https://laghubittanews.com/wp-content/uploads/2024/07/Laghubitta-Final-1536x380-1.jpg" alt="" /></Link>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <img className='w-100 ah' src="http://laghubittanews.com/wp-content/themes/laghubitta/img/gif-900-x-100.gif" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
        <nav className="navbar navbar-expand-lg bg-success" id='navbar'>
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {category.map(a=>(
                        <li className="nav-item ps-0 px-3" key={a.id}>
                  <Link className="nav-link hover-light fs-5 fw-bold text-white" to={`/category/${a.id}`}>{a.name}</Link>
                  </li>
                    ))}
              </ul>
            </div>
          </div>
        </nav>
        </section>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Cat/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    </>
  )
}

export default Header
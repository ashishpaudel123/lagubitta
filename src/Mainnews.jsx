import React, { useEffect, useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Mainnews() {
    let [mainnews,setMainnews] = useState([])
    useEffect(()=>
        {
            fetch('https://laghubittanews.com/wp-json/wp/v2/posts?categories=2').then(res=>res.json()).then(a=>setMainnews(a))
        }
    , []);
  return (
    <>
        <div className="container mt-4">
            {mainnews.map((a,i)=>(
                i === 0 ? (
                <div key={a.id} className='text-center shadow'>
                    <Link className='text-decoration-none'  to={`/details/${a.id}`}><h1 className='fw-bold hover-green text-success'>{a.title.rendered}</h1></Link>
                    <Link to={`/details/${a.id}`}><img className='img-fluid opacity-low' src={a.featured_image_src} alt="" /></Link>
                    <div className='my-3 fs-5'
                dangerouslySetInnerHTML={{__html: a.excerpt.rendered}}
                /> 
                </div>
                ) : null
            ))}
        </div>
    </>
  )
}

export default Mainnews
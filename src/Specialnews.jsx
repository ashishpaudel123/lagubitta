import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Specialnews() {
     let [news,setNews] = useState([])
        useEffect(()=>
            {
                fetch('https://laghubittanews.com/wp-json/wp/v2/posts').then(res=>res.json()).then(a=>setNews(a))
            },[]);
            
  return (
    <>
        <div className="container mt-4">
            <h2 className='p-2 bg-success text-center px-3 text-white'>लघुवित्त विशेष</h2>
            <div className="row shadow mx-2 p-3">
                {news.map((a,i)=>(
                    i <=3 ? (
                    <div key={a.id} className="col-lg-3 col-md-6 col-sm-12">
                        <div className="p-4 p-2 shadow rounded border">
                    <div className="row">
                        <div className="">
                            <Link to={`/details/${a.id}`}><img className='w-100 lnews' src={a.featured_image_src} alt="" /></Link>
                        </div>
                        <div className="mt-2">
                            <Link to={`/details/${a.id}`} className='text-decoration-none'><p className='text-success fs-5 hover-green fw-bold'>{a.title.rendered}</p></Link>
                        </div>
                    </div>
                </div>
                </div>
                ):null
                ))}
            </div>
        </div>
    </>
  )
}

export default Specialnews
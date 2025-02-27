import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Information() {
     let [news,setNews] = useState([])
        useEffect(()=>
            {
                fetch('https://laghubittanews.com/wp-json/wp/v2/posts').then(res=>res.json()).then(a=>setNews(a))
            },[]);
  return (
    <>
        <div className="container mt-4">
            <h2 className='p-2 bg-success px-3 text-white text-center'>लघुवित्त सूचना</h2>
            <div className="row mx-1">
                {news.map((a,i)=>(
                    i <=5 ? (
                    <div key={a.id} className="col-lg-4 my-2 col-md-6 col-sm-12">
                        <div className="p-2 shadow rounded border">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <Link className='text-decoration-none' to={`/details/${a.id}`}><img className='w-100 lnews' src={a.featured_image_src} alt="" /></Link>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <Link className='text-decoration-none' to={`/details/${a.id}`}><p className='mt-2 fs-5 text-success hover-green fw-bold'>{a.title.rendered}</p></Link>
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

export default Information
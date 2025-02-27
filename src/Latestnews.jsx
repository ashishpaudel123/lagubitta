import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Latestnews() {
    let [news,setNews] = useState()
    useEffect(()=>
        {
            fetch('https://laghubittanews.com/wp-json/wp/v2/posts?categories=2').then(res=>res.json()).then(a=>setNews(a))
        },[]);
        if (!news) {
            return <>
            <div className='d-flex justify-content-center py-5'>
                <div className="loader">
                    
                </div>
            </div>
            </>;
          }
  return (
    <>
        <div className="container mt-4">
            <h2 className='bg-success p-2 text-white  text-center'>लघुवित्त समाचार</h2>
            <div className="row shadow mx-2 p-3">
                {news.map(a=>(
                    <div key={a.id} className="col-lg-6">
                        <div className="p-4 p-2 shadow rounded border">
                    <div className="row">
                        <div className="col-6">
                            <Link to={`/details/${a.id}`}><img className='w-100 lnews' src={a.featured_image_src} alt="" /></Link>
                        </div>
                        <div className="col-6">
                            <Link className='text-decoration-none' to={`/details/${a.id}`}><p className='text-success fs-5 hover-green fw-bold'>{a.title.rendered}</p></Link>
                        </div>
                    </div>
                </div>
                </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Latestnews
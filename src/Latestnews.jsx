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
            <div className="row shadow mx-1">
                {news.map(a=>(
                    <div key={a.id} className="col-lg-6 my-2">
                        <div className="p-1 shadow rounded border">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <Link to={`/details/${a.id}`}><img className='w-100 lnews' src={a.featured_image_src} alt="" /></Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <Link className='text-decoration-none' to={`/details/${a.id}`}><p className='text-success px-1 py-2 fs-5 hover-green fw-bold'>{a.title.rendered}</p></Link>
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
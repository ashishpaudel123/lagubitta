import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cat() {
    let {id}=useParams()
    let [cat,setCat] = useState(null)
    useEffect(()=>{
        fetch(`https://laghubittanews.com/wp-json/wp/v2/posts?categories=${id}`).then(res=>res.json()).then(a=>setCat(a))
    },[id])

    if (!cat) {
        return <>
        <div className='d-flex justify-content-center py-5'>
            <div className="loader">
                
            </div>
        </div>
        </>;
      }
  return (
    <>
    <section>
    <div className="container">
    
        {cat.map((a)=>(
            <div key={a.id} className="shadow">
            <div className="row mt-2 p-3">
            <div className="col-lg-4">
                <div className="shadow">
            <Link to={`/details/${a.id}`}><img className='img-fluid' src={a.featured_image_src} alt="" /></Link>
            </div>
            </div>
            <div className="col-lg-8">
                <Link className='text-decoration-none' to={`/details/${a.id}`}><h5 className='fw-bold fs-3 hover-green text-success'>{a.title.rendered}</h5></Link>
                <div className='fs-5'
                dangerouslySetInnerHTML={{__html: a.excerpt.rendered}}
                />
            </div>
            </div>
            </div>
        ))}
    </div>
    </section>
    </>
  )
}

export default Cat
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [details, setDetails] = useState(null); // Initialize with null
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://laghubittanews.com/wp-json/wp/v2/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  // Show loading state while data is being fetched
  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="container">
        <img className="w-100 my-4" src="https://laghubittanews.com/wp-content/themes/laghubitta/img/ncell.gif" alt="" />
        <div className="shadow">
          <div className="row mt-2 p-3">
            <div className="col-lg-12">
            <h5 className="fw-bold fs-1 text-center text-success">
                {details.title.rendered}
              </h5>
              <div className="shadow">
                <img
                  className="w-100 opacity-low"
                  src={details.featured_image_src}
                  alt="post cover"
                />
              </div>
            </div>
            <div className="col-lg-12">
              
              <div className="my-4 im fs-5"
                dangerouslySetInnerHTML={{ __html: details.content?.rendered }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
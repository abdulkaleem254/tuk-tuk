const GalleryCarousel = ({ list, title, description }) => {
    return (
        <>
            <section id="gallery" className="gallery-section my-2 ">
                <div className="container">
                    <h2 className="text-center">{title}</h2>
                    <p className="description">{description}
                    </p>

                    <div id="carouselExampleFade" className="carousel slide carousel-fade bg-dark">
                        <div className="carousel-inner">
                            {list.map((image, index) => {
                                return (
                                    <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={`image-${index}`}>
                                        <img src={image} className="d-block w-100" alt="..." />
                                    </div>
                                )
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GalleryCarousel;
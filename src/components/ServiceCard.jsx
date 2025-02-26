const ServiceCard = ({ service }) => {
    return (
        <div className="col-12 col-md-3 my-2" key={index}>
            <div className="card">
                <div className="card-front" style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="overlay">
                        <div>
                            <h2>{service.title}</h2>
                            <p><b>Price :</b>{service.price}</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <h6>{service.title}</h6>
                        <p><b>Price </b>: {service.price}</p>
                        {service.perks.length > 0 && <ul>
                            <b>Perks </b>:
                            {service.perks.map((perk, i) => (
                                <li key={i}><i className="fas fa-check-circle"></i> {perk}</li>
                            ))}
                        </ul>}
                        <p><b>Location </b> : {service.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;
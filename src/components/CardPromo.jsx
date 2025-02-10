import { createBrowserRouter, NavLink } from "react-router-dom"
import react, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardPromo = ({service}) => {
    return (
        <>
            <div className="col-12 col-md-4 my-3 mx-auto card-box" >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={service.title}
                        height="250"
                        image={service.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {service.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {service.description}
                        </Typography>
                        <Typography className="mt-3" component="ul" variant="body2" sx={{ color: 'text.primary', listStyleType: "none", textAlign: "left" }}>
                            <li><b>Highlights:</b> {service.highlights}</li>
                            <li><b>Duration:</b> {service.duration}</li>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default CardPromo;
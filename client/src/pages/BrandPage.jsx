import React, { useState, useEffect } from "react";
import Sneaker from "../components/Sneaker";
import BrandButtons from "../components/BrandButtons";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const BrandPage = () => {
    const sneakers = useSelector(state => state.sneakers);

    const location = useLocation();
    const path = location.pathname;
    let brand = path.split("/")[2];
    if (brand.includes("_")) {
        brand = brand.replace("_", " ");
    }

    brand = brand.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    ).join(" ");

    const brandSneakers = sneakers.sneakers.filter(sneaker => {
        return sneaker.brand === brand;
    });
    return (
        <div className="brand-page">
            <BrandButtons />
            <h1 className="centered-text brand-heading">{brand}</h1>
            {!brandSneakers.length ? <h2 className="centered-text nosneakertext">No sneakers found for {brand}</h2> : null}
            <div className="sneaker-card-container">
            {brandSneakers.map(sneaker => {
                return <Sneaker key={sneaker.id} sneaker={sneaker} />
            }
            )}
            </div>
        </div>
    )
}

export default BrandPage;
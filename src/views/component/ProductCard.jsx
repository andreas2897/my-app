import React from 'react'

const ProductCard = (props) => {
    const { productData } = props
    const { author, title, review, desc, price, discount, image, stock  } = productData

const renderHarga = () => {
    let disc = (discount/100) * price
    let finalPrice = price - disc

    if (discount) {
        return (
        <div className="d-flex">
        <h5 className="mr-4"> ${finalPrice.toFixed(2)} </h5>
        <h5 style={{textDecoration:"line-through", opacity:"0.7"}}> ${price} </h5>
        </div>
        )   
    } else {
    return (
        <>
        <h5> ${price} </h5>
        </>
    )
    }
}

const renderButton = () => {
    if (stock != 0) {
        return (
            <div className="d-flex justify-content-center">
                <input className="buttonBuy" style={{height:"50px", width:"280px" }} type="button" value="Buy Now" />
            </div>
        )
    } else {
        return (
            <div className="d-flex justify-content-center">
                <input className="buttonBuy" style={{height:"50px", width:"280px"}} type="button" value="Buy Now" disabled/>
            </div>
        )
    }
}

    return (
        <div className="d-flex col-5" >
            <div className="d-flex justify-content-center col-6" style={{height:"294px"}}>
                <img style={{height:"100%"}} src={image} alt=""/>
            </div>
            <div className="col-7">
                <p style={{opacity:"0.8"}}> {author} </p>
                <h3 style={{fontWeight:"bold"}}> {title} </h3>
                <p> {review}/5 Review </p>
                <p style={{opacity:"0.8"}}> {desc} </p>
                {renderHarga()}
                {renderButton()}
            </div>
        </div>
    )
    }


export default ProductCard
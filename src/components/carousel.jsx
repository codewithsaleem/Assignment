import Carousel_Indicators from "./carousel-ndicators";

function Banner() {
    return (
        <div className="container mt-4">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 cimg1" src="https://s3-alpha-sig.figma.com/img/cfa3/e1ad/a5e319491c6768de72403f852ec058f6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-HYKQKn1LfxnKCi-z925zNscqYhL3DOyQMGHITFTnKRlkNk8yQs0QVst1oB0gVuXp0vF8yW3MF~dOtqrZeJb-7BNmG~AdnFNEttRdgEbIwDDRRISeZssR6sG0nu8ykwICEB2CG5nrlG5TYHTzs3jNbLECDx1a1R4uE3oPqqqrKHBVxpm4saGH4Fp80jCRhh4pXmdm5gEs7~Dos5AYHnlo5sGt852B5t2Zw48N6GMfYroCysKFveLQcllRHeU-jKWh24ZGR2re4gHn1USr~7Ss2kXGtM0r-BkFCIGZ5K5OKuzS-Dujya7ZFx5ylM4pjJEUSRnnD-lqwBY~S0zQRgdA__" alt="First slide" />
                    </div>
                    {/* <div className="carousel-item">
                        <img className="d-block w-100 cimg1" src="..." alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 cimg1" src="..." alt="Third slide" />
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <Carousel_Indicators/>
        </div>
    )
}
export default Banner;
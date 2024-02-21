function Carousel_Indicators() {
    return (
        <div className="mt-4">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" className="non-active"></li>
                <li data-target="#myCarousel" data-slide-to="2" className="non-active"></li>
            </ol>
        </div>
    )
}
export default Carousel_Indicators;
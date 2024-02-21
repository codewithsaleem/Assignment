import Cards from "./card";
import Carousel_Indicators from "./carousel-ndicators";

function AllCards() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><Cards /></div>
            </div>

            {/* <Carousel_Indicators /> */}
        </div>
    )
}
export default AllCards;
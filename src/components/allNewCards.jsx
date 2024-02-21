import NewCard from "./newCard";

function AllNewCards() {
    return (
        <div className="container mt-4">
            <h3 className="text-center fnt">Deals of the day</h3>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
            </div>
        </div>
    )
}
export default AllNewCards;
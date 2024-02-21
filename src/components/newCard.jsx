function NewCard() {
    return (
        <div className="card text-center d-flex align-items-center justify-content-center" style={{height: '250px'}}>
            <div className="card-body">
                <img className="amazon-img" src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__" alt="" />
                <p className="card-title appliances1 mt-2">Amazon</p>
            </div>
            <div className="text-center p-3">
            <p className="card-title appliances">Flat 30% off</p>

                <a href="#" className="btn btn-danger go-button">GRAB NOW</a>
            </div>
        </div>
    )
}
export default NewCard;
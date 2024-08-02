export const Card = () => {
    return (
        <>
            <h1>This is Card</h1>
            <div className="card" style={{ "width": "18rem" }}>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43" className="card-img-top" alt="card-image" />
                <div className="card-body">
                    <h5 className="card-title">Chaska Cafe</h5>
                    <h6>60-65 mins</h6>
                    <p>Cafe, Italian, Chinese</p>
                    <h6>4.3 stars</h6>
                </div>
            </div>
        </>
    )
}
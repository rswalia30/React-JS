import { Card } from "./Card"
import { resturantList } from "./Card"

export const Body = () => {
    return (
        <div className="container">
            <h1>This is Body</h1>
            <div className="row">
                {/* <Card resturantList={resturantList[0]} />
                <Card resturantList={resturantList[1]} />
                <Card resturantList={resturantList[2]} /> */}


                {/* We have to pass all properties(name,img,time,cusine,stars) */}
                {/* <Card name={resturantList[0].name} img={resturantList[0].img} /> */}

                {/* Instead use :- Spread Operator */}

                {/* <Card {...resturantList[0]} />
                <Card {...resturantList[1]} />
                <Card {...resturantList[2]} /> */}

                {/* LOOP */}
                {
                    // resturantList.map((resturant, index) => {
                    //     return <Card {...resturant} key={index} />
                    // })

                    resturantList.map((resturant) => {
                        return <Card {...resturant} key={resturant.id} />
                    })
                }

            </div>
        </div>
    )
}
import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'


const RideSelector = (props) => {

    const [duration, setDuration ]= useState(0);



    const getDirections = (pickUpCoordinates, dropoffCoordinates) => {
        // for latitude and longitude
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]},${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA",
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            if (data.routes && data.routes.length > 0) {
                setDuration(data.routes[0].duration);
            } else {
                // Handle case when no routes are found
                console.warn('No routes found in the response');
                // You can set a default duration or handle the absence of routes in another way.
                // For example:
                // setDuration(0); // Setting duration to 0 or another default value
            }
        }).catch(error => {
            console.error('Error fetching or parsing directions:', error);
            // Handle error here
        });
    }

    useEffect(()=>{
        if(props.pickUpCoordinates && props.dropoffCoordinates){
            getDirections(props.pickUpCoordinates, props.dropoffCoordinates)
        }

    }, [props.pickUpCoordinates, props.dropoffCoordinates])



    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index)=>(
                    <Car
                    key={index}
                    >
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>{car.time} away</Time>
                        </CarDetails>
                        <Price>${(100*car.multiplier).toFixed(2)}</Price>
                    </Car>
                )) }
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Price = tw.div`
text-sm
`

const Time = tw.div`
text-xs text-blue-500
`

const Service = tw.div`
font-medium
`

const CarDetails = tw.div`
flex-1
`

const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex items-center p-4
`

const CarList = tw.div`
flex-1  overflow-y-scroll
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const Wrapper = tw.div`
flex flex-col overflow-y-scroll
`

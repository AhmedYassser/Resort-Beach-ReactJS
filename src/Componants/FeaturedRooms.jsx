import React from 'react'
import { useRoomContext } from "../Context";
import { Room } from './Room'
import Title from './Title'
import Loading from '../Componants/Loading'


export const FeaturedRooms = () => {

    let { loading, featuredRooms } = useRoomContext();

    const rooms = featuredRooms.map((room, index) => {
        return <Room key={index} rooms={room} />
    })

    return (
        <>
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}

                </div>
            </section>
        </>
    )
}

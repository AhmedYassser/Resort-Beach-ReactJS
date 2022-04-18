import React from 'react'
import { useRoomContext } from "../Context";
import { RoomsFilter } from './RoomsFilter'
import { RoomsList } from './RoomsList'
import Loading from './Loading'

export const RoomsContainer = () => {

    const { loading , rooms , sortedRooms} = useRoomContext();


    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

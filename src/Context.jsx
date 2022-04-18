import React, { useContext, useEffect, useRef, useState } from "react";
import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
    const didMount = useRef(false)

    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    });


    useEffect(() => {
        let rooms = formatdata(items);
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        let maxSize = Math.max(...rooms.map((item) => item.size));

        setState({
            ...state,
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
        });

    }, []);


    const formatdata = (items) => {
        let tempItem = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((image) => image.fields.file.url);
            let rooms = { ...item.fields, images: images, id: id };
            return rooms;
        });
        return tempItem;
    };

    const getRoom = (slug) => {
        let tempRooms = [...state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    };

    const handleChange = (event) => {

        const type = event.target.type;
        const value = type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });

    };
    
    useEffect(() => {
        if (didMount.current) {
            filterRooms();
        } else didMount.current = true;
    }, [state.type,
    state.capacity,
    state.price,
    state.minPrice,
    state.maxPrice,
    state.minSize,
    state.maxSize,
    state.breakfast,
    state.pets,
    ])

    const filterRooms = () => {

        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = state;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);
        price = parseInt(price);



        if (type !== "all") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);

        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );

        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        setState((prevState) => {
            return {
                ...prevState,
                sortedRooms: tempRooms,
            };
        });
    };

    return (
        <RoomContext.Provider value={{
            ...state,
            getRoom,
            handleChange
        }}>
            {children}
        </RoomContext.Provider>
    )
};

export const useRoomContext = () => {
    return useContext(RoomContext)
};

export { RoomContext, RoomProvider };
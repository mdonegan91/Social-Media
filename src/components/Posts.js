import React from "react";
import FriendStatus from './FriendStatus';


const mainPostListFriendStatus = [
    {
        name: "Mittens",
        img: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
            alt: "Mittens",
            width: "50px"
        },
        desc: "Meow Meow Purr Meow",
        time: 5

    },
    {
        name: "Pinkie Pie",
        img: {
            src: "https://a-z-animals.com/media/2021/11/newborn-piglet-on-spring-green-grass-on-a-farm-picture-id956025942.jpg",
            alt: "Mittens",
            width: "50px"
        },
        desc: "Oi Oi Oink Oi",
        time: 10

    },
    {
        name: "Fluffy",
        img: {
            src: "https://m.media-amazon.com/images/I/41-vsaV9AYL.jpg",
            alt: "Fluffy",
            width: "50px"
        },
        desc: "Woof Woof Bark Woof Cant wait for a walk",
        time: 15
    }
];

function Posts() {
    return (
        <React.Fragment>
            <hr />
            {mainPostListFriendStatus.map((friendStatus, index) => (
                <FriendStatus name={friendStatus.name}
                    img={friendStatus.img}
                    time={friendStatus.time}
                    desc={friendStatus.desc}
                    key={index} />
            ))}
        </React.Fragment>
    );
}

export default Posts;
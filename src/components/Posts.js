import React from "react";
import FriendStatus from './FriendStatus';


const mainPostListFriendStatus = [
    {
        name: "Mittens",
        img: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
            alt: "Mittens",
            width: "50px",
        },
        desc: "Meow Meow Purr Meow",
        time: 5

    },
    {
        name: "Pinkie Pie",
        img: {
            src: "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/piglet-square-dog-photography.jpg",
            alt: "Pinkie the Pig",
            width: "50px",
        },
    desc: "Oi Oi Oink Oi",
    time: 10

    },
{
    name: "Fluffy",
        img: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeDvW1nkAKDhiT5bwBNkJdRtdllSq0pfgfg&usqp=CAU",
            alt: "Fluffy",
                width: "50px",
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
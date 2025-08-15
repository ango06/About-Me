

interface CardObj {
    name: string,
    img: string
}

const Movies: React.FC<CardObj>= (props) => {
    return (
        <div className="m-10 w-100">
            <img className="h-100 justify-self-center" src={props.img} />
            <p className="text-center">{props.name}</p>
        </div>
    )
}

export default Movies;
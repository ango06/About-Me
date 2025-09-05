interface CardObj {
    name: string,
    img: string
}

const Socials: React.FC<CardObj>= (props) => {
    return (
        <div className="m-10 w-100">
            <img className="h-100" src={props.img} />
            <p className="text-center">{props.name}</p>
        </div>
    )
}

export default Socials;
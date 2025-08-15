
import Socials from "../components/Movies.tsx";

const Connect = () => {

    return (
        <>
            <div className="flex flex-row">
                <Socials name="Instagram" img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                <Socials name="Spotify" img="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" />
                <Socials name="Pinterest" img="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" />
                <Socials name="Duolingo" img="https://brandlogos.net/wp-content/uploads/2023/09/duolingo_icon-logo_brandlogos.net_aru6q-512x512.png" />
                <Socials name="LinkedIn" img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" />
                <Socials name="Roblox" img="https://static.vecteezy.com/system/resources/previews/027/127/470/non_2x/roblox-logo-roblox-icon-transparent-free-png.png" />
                <Socials name="Depop" img="https://img.icons8.com/?size=512&id=vndRkJftsYKS&format=png" />
            </div>
        </>
    )
}

export default Connect;

// upon hover, display user name under
// also allow photos as links
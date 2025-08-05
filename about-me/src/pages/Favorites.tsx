import Movies from "../components/Movies.tsx";

const Favorites = () => {

    return (
        <>
            <h2 className="m-10 text-center text-4xl font-bold">Add these to your watch list</h2>
            <div className="flex flex-row gap-4">
                <Movies name="Ted Lasso" img="https://resizing.flixster.com/AWhklm6QkZfQWra2v0lV0VQ_HVY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNzU2ZTMxZmEtODlmZC00NDk5LWJlMDAtNWY1OWIwZjYwNDgxLnBuZw==" />
                <Movies name="Journey to the Center of the Earth" img="https://m.media-amazon.com/images/M/MV5BNTMyMGQ4MWYtZmMyYi00M2JhLWFhZmQtNWM5MTVjYjk1MTYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
                <Movies name="Severance" img="https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_.jpg" />
            </div>

            <div className="flex flex-row">
                <img className="mx-10 h-100 animate-spin" src="https://gallery.yopriceville.com/downloadfullsize/send/30392"/>
                <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/19Ym5Sg0YyOCa6ao21bdoG?utm_source=generator" 
                    width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </>
    )
}

// New Girl, Community, 
// closet inspo

export default Favorites;
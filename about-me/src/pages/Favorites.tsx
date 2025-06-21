
const Favorites = () => {

    return (
        <>
            <h2 className="text-center text-4xl">Add these to your watch list</h2>
            <div className="flex flex-row gap-4">
                <div>
                    <img className="h-100" src="https://resizing.flixster.com/AWhklm6QkZfQWra2v0lV0VQ_HVY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNzU2ZTMxZmEtODlmZC00NDk5LWJlMDAtNWY1OWIwZjYwNDgxLnBuZw=="/>
                    <p className="text-center">Ted Lasso</p>
                </div>

            </div>
            <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/19Ym5Sg0YyOCa6ao21bdoG?utm_source=generator" 
                width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <img className="h-100 animate-spin" src="https://gallery.yopriceville.com/downloadfullsize/send/30392"/>
        </>
    )
}

export default Favorites;
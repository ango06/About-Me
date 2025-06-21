// imports
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from "./firebase.ts";

// collections
const ratingsCollection = collection(db, "ratings");

// interfaces
export interface Rating {
    rating: number;
}

// add a rating to the "ratings" collection
export async function addRating(rating: Rating) {
    await addDoc(ratingsCollection, rating);
}

// get all ratings from the "ratings" collection
export async function getRatings() {
    const ratingsSnapshot = await getDocs(ratingsCollection);
    const ratingsList = ratingsSnapshot.docs.map(doc => (doc.data().rating as number));
    // doc.data() is never undefined for query doc snapshots
    return ratingsList;
}

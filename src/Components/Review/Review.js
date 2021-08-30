import { getReview } from "../../Services/Api"
import { useState, useEffect } from "react"

const shortid = require('shortid');
export default function Review({ movieId }) {
    const [review, setReview] = useState([]);
    useEffect(() => {
        getReview(movieId).then(res => setReview(res.results))
    }, [movieId]);
    console.log(review)
    return (
        <>
            {review &&
                <ul>
                    {review.map(rev => <li key={shortid.generate()}>
                        <h4>Author: {rev.author}</h4>
                        <p>{rev.content}</p>
                    </li>)}
                </ul>}
            {review.length===0&& <p>We don't have any review</p>}
        </>
    )
}
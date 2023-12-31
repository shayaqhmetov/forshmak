import { notFound } from "next/navigation";

export default function Review({ params }: { params: { pageId: number, reviewId: number } }) {
    if (params.reviewId > 10) {
        return notFound();
    }
    return (
        <div>
            <h1>{params.pageId} page</h1>
            <h2>{params.reviewId} review</h2>
        </div>
    )
}   
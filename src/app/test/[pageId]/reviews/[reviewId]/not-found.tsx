export default function ReviewNotFound({ params }: { params: { pageId: number, reviewId: number }}) {
    return <h1>
        Page {params?.pageId}
        Review {params?.reviewId} Not found
    </h1>
}
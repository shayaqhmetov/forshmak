export default function Page({ params }: { params: { pageId: string } }) {
    return (
        <h1>{params.pageId} page</h1>
    )
}
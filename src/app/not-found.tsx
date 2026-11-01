// The same two lines as Next's default 404, set like the join page. The title is the one the
// default page gave the document.
export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-x-clip px-4 py-16 text-center md:px-6">
            <title>404: This page could not be found.</title>
            <main>
                <h1 className="text-display font-semibold text-ink">404</h1>
                <p className="mt-4 text-name font-medium text-muted md:mt-6">This page could not be found.</p>
            </main>
        </div>
    );
}

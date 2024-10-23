import ItemList from "./item-list";

function Page() {
    return (
        <main className='container mx-auto px-4 py-8'>
            <h1 className='text-4xl font-bold mb-8 text-center'>
                Shopping List
            </h1>
            <ItemList />
        </main>
    );
}

export default Page;
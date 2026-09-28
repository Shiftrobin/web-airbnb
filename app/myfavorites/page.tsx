import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions";


const MyFavoritePage = async () => {

    const userId = await getUserId();


    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>
                    You need to be authenticated...
                </p>
            </main>
        );
    } 

    return (
        <main className="max-w-[1500px] max-auto px-6 py-12">
            <h1 className="my-6 text-2xl">
                My Favorites 
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertyList 
                    favorites={true}
                />
            </div>
        </main>

    );

}


export default MyFavoritePage;
import WishlistItem from "../../molecules/WishlistItem/WishlistItem";
import ThemeOneMainTemplate from "../../templates/ThemeOneMainTemplate/ThemeOneMainTemplate";


const sampleWishlistItems = [
    {
        id: 1,
        name: "Minimalist Watch - Silver",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
    }
];

const Wishlist = () => {
    return (
        <ThemeOneMainTemplate>
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    {/* Header Section */}
                    <div className="bg-indigo-50 p-6 rounded-lg text-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Your Wishlist</h2>
                        <p className="text-gray-600">Save your favorite items and get them later!</p>
                    </div>

                    {/* Wishlist Items */}
                    <div className="space-y-4">
                        {sampleWishlistItems.length > 0 ? (
                            sampleWishlistItems.map(item => (
                                <WishlistItem key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Your wishlist is empty.</p>
                        )}
                    </div>
                </div>
            </section>
        </ThemeOneMainTemplate>
    );
};

export default Wishlist;

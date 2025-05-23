import React, { useEffect } from "react";
import { ProductGrid } from "./components/product/ProductGrid";
import { ProductDetail } from "./components/product/ProductDetail";
import { Layout } from "./components/layout/Layout";
import { ChevronLeft } from "lucide-react";
import { useProductStore } from "./store";
import { PrimaryButton } from "./components/ui";

const App: React.FC = () => {
  const { selectedProduct, fetchProducts, setSelectedProduct } =
    useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedProduct ? (
          <div className="space-y-6">
            <PrimaryButton
              icon={<ChevronLeft className="w-5 h-5" />}
              text="Back to Catalog"
              onClick={() => setSelectedProduct(null)}
            />
            <ProductDetail product={selectedProduct} />
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Product Store
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Browse our collection of products and add your favorites to the
                wishlist for later.
              </p>
            </div>

            <ProductGrid />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;

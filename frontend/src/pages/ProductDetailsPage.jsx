import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching new data

    if (eventData !== null && Array.isArray(allEvents)) {
      const event = allEvents.find((i) => i._id === id);
      setData(event || undefined); // Set data or undefined if not found
    } else if (Array.isArray(allProducts)) {
      const product = allProducts.find((i) => i._id === id);
      setData(product || undefined); // Set data or undefined if not found
    }

    setLoading(false); // Set loading to false after data is fetched
  }, [id, allProducts, allEvents, eventData]);

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p> // Show loading state while fetching data
      ) : (
        <>
          {data !== undefined ? ( // Check if data is defined before rendering
            <ProductDetails data={data} />
          ) : (
            <p>Product or event not found.</p> // Show error message or handle not found case
          )}
          {!eventData && data !== undefined && <SuggestedProduct data={data} />}
        </>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

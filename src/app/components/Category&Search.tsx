"use client"
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Product } from "../../../types/product";

// Define the props interface
interface CategoryFilterProps {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
}

const CategoryFilter= ({ products, setFilteredProducts }: CategoryFilterProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.flatMap((product) => product.tags || [])),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) =>
        product.tags?.includes(selectedCategory)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products, setFilteredProducts]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded w-full md:w-1/3"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
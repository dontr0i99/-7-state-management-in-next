'use client';

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";

  const setCategory = (newCategory) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", newCategory);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h2>Filter by Category</h2>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>
    </div>
  );
}

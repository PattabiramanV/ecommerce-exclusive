import React, { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null);

// Demo seed data to match current UI
const seedWishlist = [
  {
    id: 1,
    title: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "RGB liquid CPU Cooler",
    price: 1960,
    img: "https://images.unsplash.com/photo-1612197527762-6429b3a5ba34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    price: 550,
    img: "https://images.unsplash.com/photo-1606813907306-bd9c0d9a9e8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Quilted Satin Jacket",
    price: 750,
    img: "https://images.unsplash.com/photo-1544033527-b192daee1f20?q=80&w=1200&auto=format&fit=crop",
  },
];

const seedCart = [
  {
    id: 101,
    title: "LCD Monitor",
    price: 650,
    qty: 1,
    img: "https://images.unsplash.com/photo-1587202372775-98927b415b9b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 102,
    title: "H1 Gamepad",
    price: 550,
    qty: 2,
    img: "https://images.unsplash.com/photo-1606813907306-bd9c0d9a9e8d?q=80&w=1000&auto=format&fit=crop",
  },
];

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(seedCart);
  const [wishlist, setWishlist] = useState(seedWishlist);

  const addToCart = (item, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const updateQty = (id, qty) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)));

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.some((w) => w.id === item.id)) return prev;
      return [...prev, { ...item }];
    });
  };
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((w) => w.id !== id));

  const moveAllWishlistToCart = () => {
    setCart((prev) => {
      const merged = [...prev];
      for (const item of wishlist) {
        const ex = merged.find((p) => p.id === item.id);
        if (ex) ex.qty += 1;
        else merged.push({ ...item, qty: 1 });
      }
      return merged;
    });
    setWishlist([]);
  };

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQty,
      addToWishlist,
      removeFromWishlist,
      moveAllWishlistToCart,
    }),
    [cart, wishlist]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};

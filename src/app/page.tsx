
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  color: string;
};

const slides = [
  {
    eyebrow: "THE NEW MENSWEAR",
    title: "STYLE THAT\nSPEAKS FOR YOU.",
    description:
      "Elevated essentials. Timeless design. Made for the way you live.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85",
    button: "EXPLORE COLLECTION",
    href: "/products/tshirt",
  },
  {
    eyebrow: "EFFORTLESS EVERYDAY",
    title: "LESS NOISE.\nMORE STYLE.",
    description:
      "Discover everyday pieces that make getting dressed effortless.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1800&q=85",
    button: "SHOP SHIRTS",
    href: "/products/shirt",
  },
  {
    eyebrow: "DENIM, REDEFINED",
    title: "OWN YOUR\nEVERYDAY.",
    description:
      "Modern fits and versatile essentials. Your wardrobe, upgraded.",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1800&q=85",
    button: "SHOP DENIM",
    href: "/products/jeans",
  },
];

const collections = [
  {
    name: "T-Shirts",
    category: "tshirt",
    subtitle: "Everyday essentials",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Shirts",
    category: "shirt",
    subtitle: "Smart. Simple. Refined.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Denim",
    category: "jeans",
    subtitle: "Made to move",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Cotton Pants",
    category: "cotton-pants",
    subtitle: "Comfort meets style",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load products from your existing API.
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/product?limit=8");

        if (!response.ok) {
          throw new Error("Could not load products");
        }

        const data = await response.json();
        setProducts(data.products ?? []);
      } catch (error) {
        console.error("Product loading failed:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Automatically change the hero slide every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#171914]">
      {/* HERO SLIDER */}
      <section className="px-3 pt-3 sm:px-6 sm:pt-6">
        <div
          className="relative flex min-h-[590px] items-center overflow-hidden bg-[#272923] bg-cover bg-center transition-all duration-700 sm:min-h-[680px] lg:min-h-[730px]"
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          {/* Dark overlay for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

          <div className="relative z-10 w-full px-6 py-20 text-white sm:px-12 lg:px-20">
            <p className="mb-6 text-xs font-semibold tracking-[0.35em] text-[#d8dfb8] sm:text-sm">
              {slide.eyebrow}
            </p>

            <h1 className="whitespace-pre-line text-5xl leading-[1.05] font-black tracking-tight sm:text-7xl lg:text-8xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              {slide.description}
            </p>

            <Link
              href={slide.href}
              className="mt-9 inline-flex items-center gap-5 bg-[#e5e7d4] px-7 py-4 text-xs font-bold tracking-[0.15em] text-black transition hover:bg-white"
            >
              {slide.button}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Slider controls */}
          <div className="absolute right-6 bottom-8 z-10 flex items-center gap-4 text-white sm:right-12 sm:bottom-10">
            <span className="text-sm font-medium">
              0{activeSlide + 1}
              <span className="mx-2 text-white/50">/</span>
              0{slides.length}
            </span>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() =>
                setActiveSlide(
                  (current) =>
                    (current - 1 + slides.length) % slides.length
                )
              }
              className="flex h-11 w-11 items-center justify-center border border-white/50 text-xl transition hover:bg-white hover:text-black"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() =>
                setActiveSlide((current) => (current + 1) % slides.length)
              }
              className="flex h-11 w-11 items-center justify-center border border-white/50 text-xl transition hover:bg-white hover:text-black"
            >
              →
            </button>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-6 z-10 flex gap-2 sm:left-12">
            {slides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  activeSlide === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="border-b border-black/10 px-5 py-7 sm:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 text-center sm:grid-cols-3 sm:gap-8">
          <p className="text-xs font-medium tracking-[0.16em]">
            TIMELESS BY DESIGN
          </p>
          <p className="text-xs font-medium tracking-[0.16em]">
            COMFORT IN EVERY DETAIL
          </p>
          <p className="text-xs font-medium tracking-[0.16em]">
            MADE FOR YOUR EVERYDAY
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#69704e]">
              FIND YOUR FIT
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Shop by collection
            </h2>
          </div>

          <Link
            href="/products/tshirt"
            className="hidden border-b border-black pb-1 text-xs font-semibold sm:inline-block"
          >
            EXPLORE ALL ↗
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <Link
              href={`/products/${collection.category}`}
              key={collection.category}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e9e7df]">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute right-3 bottom-4 left-3 text-white sm:right-5 sm:bottom-6 sm:left-5">
                  <p className="text-[10px] tracking-widest text-white/80 sm:text-xs">
                    0{index + 1} / COLLECTION
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {collection.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/80">
                    {collection.subtitle}
                  </p>
                  <p className="mt-4 text-sm transition group-hover:translate-x-1">
                    Shop now ↗
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#69704e]">
                YOUR NEW FAVOURITES
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                The essentials
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Everyday pieces. Better style.
              </p>
            </div>

            <Link
              href="/products/tshirt"
              className="border-b border-black pb-1 text-xs font-semibold"
            >
              VIEW ALL ↗
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="aspect-[3/4] animate-pulse bg-gray-100"
                />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
              {products.slice(0, 8).map((product) => (
                <Link
                  href={`/products/${product.category}`}
                  key={product.id}
                  className="group min-w-0"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#f1f0eb]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute top-3 left-3 bg-white px-2 py-1 text-[9px] font-bold tracking-widest">
                      ROVYN ESSENTIALS
                    </span>

                    <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg transition group-hover:bg-black group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="pt-4">
                    <h3 className="truncate text-sm font-semibold sm:text-base">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      ৳{Number(product.price).toLocaleString("en-BD")}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {product.color}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-gray-500">
              Products are unavailable right now. Please try again later.
            </p>
          )}
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="px-3 py-12 sm:px-6 sm:py-16">
        <div className="relative flex min-h-[400px] items-center overflow-hidden bg-[#252920] sm:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1600&q=85"
            alt="Modern men's fashion"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

          <div className="relative z-10 max-w-2xl px-6 py-16 text-white sm:px-14 sm:py-20">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#d8dfb8]">
              THE ROVYN APPROACH
            </p>

            <h2 className="mt-5 text-4xl leading-tight font-bold sm:text-6xl">
              Good style.
              <br />
              No extra noise.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              Build a wardrobe around pieces that work together, feel
              comfortable, and stay relevant beyond a single season.
            </p>

            <Link
              href="/products/tshirt"
              className="mt-8 inline-block border border-white px-7 py-4 text-xs font-semibold tracking-widest transition hover:bg-white hover:text-black"
            >
              DISCOVER ROVYN ↗
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER-STYLE BRAND STRIP */}
      <section className="px-5 py-16 text-center sm:py-20">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#69704e]">
          DRESS WITH INTENTION
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-[0.15em] sm:text-5xl">
          ROVYN.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600">
          Modern menswear for everyday confidence.
          Find your style. Make it yours.
        </p>

        <Link
          href="/products/tshirt"
          className="mt-7 inline-block bg-black px-8 py-4 text-xs font-semibold tracking-widest text-white transition hover:bg-[#414733]"
        >
          SHOP THE COLLECTION
        </Link>
      </section>
    </main>
  );
}

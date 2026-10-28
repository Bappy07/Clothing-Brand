
import { NextResponse } from "next/server";

const productGroups = [
  {
    category: "tshirt",
    categoryName: "T-Shirt",
    names: [
      "Classic Crew Neck",
      "Oversized Fit",
      "Premium Plain",
      "Graphic Print",
      "Polo T-Shirt",
      "Striped T-Shirt",
      "V-Neck T-Shirt",
      "Heavy Cotton",
      "Minimalist Tee",
      "Relaxed Fit",
      "Vintage Wash",
      "Drop Shoulder",
      "Pocket T-Shirt",
      "Sports T-Shirt",
      "Basic Essential",
    ],
    prices: [
      450, 650, 550, 700, 600, 500, 480, 750, 580, 620,
      680, 720, 530, 490, 400,
    ],
  },
  {
    category: "shirt",
    categoryName: "Shirt",
    names: [
      "Casual Oxford",
      "Formal Slim Fit",
      "Linen Casual",
      "Check Pattern",
      "Denim Shirt",
      "Striped Casual",
      "Flannel Shirt",
      "Printed Shirt",
      "Office Formal",
      "Mandarin Collar",
      "Short Sleeve",
      "Classic Button Down",
      "Relaxed Fit Shirt",
      "Solid Color Shirt",
      "Textured Shirt",
    ],
    prices: [
      950, 1200, 1100, 850, 1300, 900, 1050, 1000, 1250,
      950, 750, 1150, 1000, 850, 1200,
    ],
  },
  {
    category: "jeans",
    categoryName: "Jeans",
    names: [
      "Slim Fit Jeans",
      "Regular Fit Jeans",
      "Straight Leg Jeans",
      "Skinny Fit Jeans",
      "Relaxed Fit Jeans",
      "Tapered Jeans",
      "Distressed Jeans",
      "Dark Blue Jeans",
      "Black Denim Jeans",
      "Light Wash Jeans",
      "Classic Blue Jeans",
      "Stretch Denim",
      "Baggy Fit Jeans",
      "Vintage Denim",
      "Ripped Jeans",
    ],
    prices: [
      1500, 1400, 1600, 1450, 1700, 1550, 1800, 1500,
      1650, 1550, 1400, 1750, 1850, 1900, 1800,
    ],
  },
  {
    category: "cotton-pants",
    categoryName: "Cotton Pants",
    names: [
      "Slim Fit Cotton",
      "Regular Fit Chinos",
      "Relaxed Cotton",
      "Straight Fit Pants",
      "Formal Cotton Pants",
      "Tapered Chinos",
      "Casual Cotton Pants",
      "Stretch Cotton Pants",
      "Pleated Pants",
      "Classic Khaki Pants",
      "Black Cotton Pants",
      "Olive Chinos",
      "Beige Cotton Pants",
      "Cargo Cotton Pants",
      "Everyday Chinos",
    ],
    prices: [
      1100, 1250, 1300, 1150, 1400, 1350, 1000, 1450,
      1500, 1200, 1250, 1350, 1200, 1600, 1100,
    ],
  },
];

const colors = [
  "Black",
  "White",
  "Navy Blue",
  "Olive",
  "Beige",
  "Grey",
  "Maroon",
  "Sky Blue",
  "Brown",
  "Charcoal",
  "Cream",
  "Forest Green",
  "Blue",
  "Khaki",
  "Burgundy",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const productImages: Record<string, string[]> = {
  tshirt: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600",
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
  ],
  shirt: [
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600",
  ],
  jeans: [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600",
    "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600",
  ],
  "cotton-pants": [
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
    "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600",
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600",
    "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600",
  ],
};

const productVariations = [
  "Classic Edition",
  "Premium Edition",
  "Essential Edition",
  "Modern Edition",
  "Vintage Edition",
  "Relaxed Edition",
  "Urban Edition",
  "Minimal Edition",
  "Signature Edition",
  "Everyday Edition",
  "Slim Edition",
  "Oversized Edition",
  "Comfort Edition",
  "Streetwear Edition",
  "Luxury Edition",
  "Casual Edition",
  "Textured Edition",
  "Summer Edition",
  "Winter Edition",
  "Limited Edition",
  "Soft Touch",
  "Daily Wear",
  "Contemporary Fit",
  "Heritage Edition",
  "Essential Plus",
  "Modern Fit",
  "Classic Plus",
  "Premium Comfort",
  "Urban Classic",
  "Weekend Edition",
  "Active Edition",
  "Clean Cut",
  "Relaxed Comfort",
  "Signature Fit",
  "Timeless Edition",
  "Minimal Plus",
  "Smart Casual",
  "Everyday Premium",
  "Refined Edition",
  "Core Collection",
  "Studio Edition",
  "Street Classic",
  "Comfort Plus",
  "Modern Essential",
  "Daily Classic",
  "Premium Basic",
  "Tailored Edition",
  "Urban Comfort",
  "Fresh Collection",
  "Essential Fit",
];

const products = productGroups.flatMap((group, groupIndex) =>
  Array.from({ length: 65 }, (_, index) => {
    const baseIndex = index % group.names.length;
    const variationIndex = Math.floor(index / group.names.length);
    const baseName = group.names[baseIndex];

    const variation =
      index < group.names.length
        ? ""
        : ` ${productVariations[variationIndex - 1]}`;

    const color = colors[index % colors.length];
    const id = groupIndex * 65 + index + 1;

    const basePrice = group.prices[baseIndex];
    const price = basePrice + variationIndex * 50;

    const imageUrl = productImages[group.category][index % 4];

    return {
      id,
      name: `${baseName}${variation} - ${color}`,
      slug: `${group.category}-${index + 1}`,
      category: group.category,
      categoryName: group.categoryName,
      price,
      currency: "BDT",
      color,
      sizes: [...sizes],
      image: imageUrl.replace(
        "?w=600",
        "?w=600&h=750&fit=crop",
      ),
      description: `${baseName}${variation}, designed for comfortable everyday wear.`,
      stock: 10 + index * 2,
      featured: index < 6,
    };
  }),
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get("category");
  const search = searchParams.get("search")?.toLowerCase();
  const requestedLimit = Number(searchParams.get("limit"));
  const limit =
    Number.isFinite(requestedLimit) && requestedLimit > 0
      ? Math.floor(requestedLimit)
      : products.length;

  let result = products;

  if (category) {
    result = result.filter(
      (product) => product.category === category,
    );
  }

  if (search) {
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.categoryName.toLowerCase().includes(search) ||
        product.color.toLowerCase().includes(search),
    );
  }

  result = result.slice(0, limit);

  return NextResponse.json({
    success: true,
    total: result.length,
    products: result,
  });
}

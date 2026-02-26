import { Collection, Product } from "./types";

export const collections: Collection[] = [
  {
    id: "colorful-creator",
    name: "Colorful Creator",
    slug: "colorful-creator",
    tagline: "Bold expression meets playful design",
    description: "For the free spirits who see the world in vivid colour. Each piece in this collection is a celebration of creativity, designed to spark joy and conversation in any space.",
    colorPair: { primary: "#FF7F32", secondary: "#F3CFB3" },
    heroImage: "/images/pages/page-50.png",
    products: [
      { id: "cc-1", name: "Flamingo Table Lamp", slug: "flamingo-table-lamp", collection: "colorful-creator", type: "Table Lamp", image: "/images/pages/page-50.png", price: 189 },
      { id: "cc-2", name: "Cheese! Table Lamp", slug: "cheese-table-lamp", collection: "colorful-creator", type: "Table Lamp", image: "/images/pages/page-51.png", price: 169 },
      { id: "cc-3", name: "Out Mood Lamp", slug: "out-mood-lamp", collection: "colorful-creator", type: "Mood Lamp", image: "/images/pages/page-52.png", price: 129 },
      { id: "cc-4", name: "In Mood Lamp", slug: "in-mood-lamp", collection: "colorful-creator", type: "Mood Lamp", image: "/images/pages/page-53.png", price: 129 },
      { id: "cc-5", name: "Rainbow Mood Lamp", slug: "rainbow-mood-lamp", collection: "colorful-creator", type: "Mood Lamp", image: "/images/pages/page-54.png", price: 149 },
      { id: "cc-6", name: "Tilt Desk Lamp", slug: "tilt-desk-lamp", collection: "colorful-creator", type: "Desk Lamp", image: "/images/pages/page-55.png", price: 219 },
      { id: "cc-7", name: "Tilt Floor Lamp", slug: "tilt-floor-lamp", collection: "colorful-creator", type: "Floor Lamp", image: "/images/pages/page-56.png", price: 389 },
      { id: "cc-8", name: "Mai Pendant", slug: "mai-pendant", collection: "colorful-creator", type: "Pendant", image: "/images/pages/page-57.png", price: 299 },
      { id: "cc-9", name: "Wander Pendant", slug: "wander-pendant", collection: "colorful-creator", type: "Pendant", image: "/images/pages/page-58.png", price: 279 },
    ],
  },
  {
    id: "experimental-rebel",
    name: "Experimental Rebel",
    slug: "experimental-rebel",
    tagline: "Where art meets illumination",
    description: "For those who dare to be different. This collection pushes boundaries with unexpected forms and bold silhouettes that transform lighting into sculptural art.",
    colorPair: { primary: "#001871", secondary: "#AC7644" },
    heroImage: "/images/pages/page-60.png",
    products: [
      { id: "er-1", name: "Block Table Lamp", slug: "block-table-lamp", collection: "experimental-rebel", type: "Table Lamp", image: "/images/pages/page-60.png", price: 199 },
      { id: "er-2", name: "Bunny Table Lamp", slug: "bunny-table-lamp", collection: "experimental-rebel", type: "Table Lamp", image: "/images/pages/page-61.png", price: 179 },
      { id: "er-3", name: "Hot Dog Table Lamp", slug: "hot-dog-table-lamp", collection: "experimental-rebel", type: "Table Lamp", image: "/images/pages/page-62.png", price: 169 },
      { id: "er-4", name: "Dino Table Lamp", slug: "dino-table-lamp", collection: "experimental-rebel", type: "Table Lamp", image: "/images/pages/page-63.png", price: 189 },
      { id: "er-5", name: "Domo Mood Lamp", slug: "domo-mood-lamp", collection: "experimental-rebel", type: "Mood Lamp", image: "/images/pages/page-64.png", price: 139 },
      { id: "er-6", name: "Observatory Mood Lamp", slug: "observatory-mood-lamp", collection: "experimental-rebel", type: "Mood Lamp", image: "/images/pages/page-65.png", price: 159 },
      { id: "er-7", name: "Edo Mood Lamp", slug: "edo-mood-lamp", collection: "experimental-rebel", type: "Mood Lamp", image: "/images/pages/page-66.png", price: 149 },
      { id: "er-8", name: "Dino Floor Lamp", slug: "dino-floor-lamp", collection: "experimental-rebel", type: "Floor Lamp", image: "/images/pages/page-67.png", price: 429 },
      { id: "er-9", name: "Hook Floor Lamp", slug: "hook-floor-lamp", collection: "experimental-rebel", type: "Floor Lamp", image: "/images/pages/page-68.png", price: 399 },
      { id: "er-10", name: "Hoop Pendant", slug: "hoop-pendant", collection: "experimental-rebel", type: "Pendant", image: "/images/pages/page-69.png", price: 319 },
    ],
  },
  {
    id: "cosmopolitan-expert",
    name: "Cosmopolitan Expert",
    slug: "cosmopolitan-expert",
    tagline: "Refined elegance for the discerning eye",
    description: "Sophisticated designs that speak to a global sensibility. Clean lines, premium materials, and timeless proportions create pieces that elevate any interior.",
    colorPair: { primary: "#AC7644", secondary: "#5A4522" },
    heroImage: "/images/pages/page-70.png",
    products: [
      { id: "ce-1", name: "Verta Bedside Table Lamp", slug: "verta-bedside-table-lamp", collection: "cosmopolitan-expert", type: "Table Lamp", image: "/images/pages/page-70.png", price: 209 },
      { id: "ce-2", name: "Verta Table Lamp", slug: "verta-table-lamp", collection: "cosmopolitan-expert", type: "Table Lamp", image: "/images/pages/page-71.png", price: 239 },
      { id: "ce-3", name: "Phi Table Lamp", slug: "phi-table-lamp", collection: "cosmopolitan-expert", type: "Table Lamp", image: "/images/pages/page-72.png", price: 199 },
      { id: "ce-4", name: "Kyoto Mood Lamp", slug: "kyoto-mood-lamp", collection: "cosmopolitan-expert", type: "Mood Lamp", image: "/images/pages/page-73.png", price: 169 },
      { id: "ce-5", name: "Connie Desk Lamp", slug: "connie-desk-lamp", collection: "cosmopolitan-expert", type: "Desk Lamp", image: "/images/pages/page-74.png", price: 249 },
      { id: "ce-6", name: "Stack Floor Lamp", slug: "stack-floor-lamp", collection: "cosmopolitan-expert", type: "Floor Lamp", image: "/images/pages/page-75.png", price: 449 },
      { id: "ce-7", name: "Butler Floor Lamp", slug: "butler-floor-lamp", collection: "cosmopolitan-expert", type: "Floor Lamp", image: "/images/pages/page-76.png", price: 479 },
      { id: "ce-8", name: "Seline Pendant", slug: "seline-pendant", collection: "cosmopolitan-expert", type: "Pendant", image: "/images/pages/page-77.png", price: 339 },
      { id: "ce-9", name: "Penny Wide Pendant", slug: "penny-wide-pendant", collection: "cosmopolitan-expert", type: "Pendant", image: "/images/pages/page-70.png", price: 299 },
      { id: "ce-10", name: "Penny Tall Pendant", slug: "penny-tall-pendant", collection: "cosmopolitan-expert", type: "Pendant", image: "/images/pages/page-71.png", price: 289 },
    ],
  },
  {
    id: "pretty-and-posh",
    name: "Pretty & Posh",
    slug: "pretty-and-posh",
    tagline: "Delicate beauty with a modern soul",
    description: "Where softness meets sophistication. Organic forms and gentle curves create an atmosphere of warmth and grace, perfect for those who appreciate understated luxury.",
    colorPair: { primary: "#F5D0C4", secondary: "#F5CDF0" },
    heroImage: "/images/products/220217-lotus.3.jpg",
    products: [
      { id: "pp-1", name: "Lotus Table Lamp", slug: "lotus-table-lamp", collection: "pretty-and-posh", type: "Table Lamp", image: "/images/products/220217-lotus.3.jpg", price: 219 },
      { id: "pp-2", name: "Clove Table Lamp", slug: "clove-table-lamp", collection: "pretty-and-posh", type: "Table Lamp", image: "/images/products/220217-clove.7.jpg", price: 199 },
      { id: "pp-3", name: "Marshmallow Table Lamp", slug: "marshmallow-table-lamp", collection: "pretty-and-posh", type: "Table Lamp", image: "/images/products/220215_marshmallow_white.44.jpg", price: 189 },
      { id: "pp-4", name: "Geode Table Lamp", slug: "geode-table-lamp", collection: "pretty-and-posh", type: "Table Lamp", image: "/images/products/geode-tl-black.jpg", price: 229 },
      { id: "pp-5", name: "Hyde Mood Lamp", slug: "hyde-mood-lamp", collection: "pretty-and-posh", type: "Mood Lamp", image: "/images/products/dodeca-tl-brown.jpg", price: 149 },
      { id: "pp-6", name: "Ariel Mood Lamp", slug: "ariel-mood-lamp", collection: "pretty-and-posh", type: "Mood Lamp", image: "/images/products/220215_marshmallow_colorful.45.jpg", price: 159 },
      { id: "pp-7", name: "Geode Floor Lamp", slug: "geode-floor-lamp", collection: "pretty-and-posh", type: "Floor Lamp", image: "/images/products/geode_fl_-_01_2.jpg", price: 459 },
      { id: "pp-8", name: "Isabella Pendant", slug: "isabella-pendant", collection: "pretty-and-posh", type: "Pendant", image: "/images/products/220217-lotus.4.jpg", price: 329 },
      { id: "pp-9", name: "Wagasa Pendant", slug: "wagasa-pendant", collection: "pretty-and-posh", type: "Pendant", image: "/images/products/210831_wander.29.jpg", price: 309 },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find(function(c) { return c.slug === slug; });
}

export function getAllProducts(): Product[] {
  return collections.flatMap(function(c) { return c.products; });
}
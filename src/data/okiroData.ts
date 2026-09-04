import { MenuItem, ExperienceItem, CoffeeFeature, Testimonial, InstagramPost } from '../types';

export const OKIRO_INFO = {
  name: 'OKIRO COFFEE ROASTERS',
  tagline: 'Coffee, Crafted Beautifully.',
  subtext: 'Specialty coffee, thoughtful food and a space made to linger.',
  meaning: '“Okiro” (起きろ) — Japanese for “to awaken with purpose”. A conscious sanctuary where specialty craft, mindful design, and warm hospitality converge.',
  address: {
    line1: 'VIP Estate, A-25, Khamardih Road',
    line2: 'Beside CRPF, VIP Colony',
    city: 'Raipur',
    state: 'Chhattisgarh',
    pincode: '492001',
    country: 'India',
    full: 'VIP Estate, A-25, Khamardih Road, beside CRPF, VIP Colony, Raipur, Chhattisgarh 492001, India',
  },
  phone: '+91 76962 43008',
  phoneDisplay: '+91 76962 43008',
  whatsappUrl: 'https://wa.me/917696243008?text=Hello%20Okiro%20Coffee%20Roasters%2C%20I%20would%20like%20to%20reserve%20a%20table%20%2F%20inquire.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Okiro+Coffee+Roasters+VIP+Estate+Khamardih+Road+Raipur+Chhattisgarh+492001',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5375782787834!2d81.6789123!3d21.2467234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddbb87a60b97%3A0x2d17c76767664402!2sOkiro%20Coffee%20Roasters!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin',
  instagram: 'https://www.instagram.com/okiro.coffee/',
  instagramHandle: '@okiro.coffee',
  hours: {
    days: 'Monday — Sunday',
    timing: '8:00 AM – 11:30 PM',
    kitchenLastOrder: '11:30 PM',
    status: 'Open Daily'
  },
  attributes: [
    'Central India Specialty Roastery',
    '100% Vegetarian Craft Kitchen',
    'Manual Pour-Over Brew Bar',
    'AeroPress Championship Host',
    'Ethical Indian Terroir Sourcing'
  ]
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'coffee',
    title: 'Specialty Coffee',
    subtitle: 'From Seed to Cup',
    description: 'Directly sourced single origins from Chikmagalur, Coorg, and Araku Valley. Roasted in small batches to honor each harvest’s natural terroir and delicate aromatics.',
    tag: 'ROASTERY & BREW BAR',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'food',
    title: 'Thoughtful Food',
    subtitle: '100% Vegetarian Craft Kitchen',
    description: 'An all-day artisanal menu blending contemporary comfort with Japanese and European sensibilities — freshly baked sourdough, handcrafted bao, and vibrant bowls.',
    tag: 'ARTISANAL DINING',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'desserts',
    title: 'Viennoiserie & Desserts',
    subtitle: 'Baked Fresh Every Sunrise',
    description: 'Japanese cloud-soft soufflé pancakes, ceremonial matcha roll cakes, laminated croissants, and Basque burnt cheesecakes crafted with uncompromising precision.',
    tag: 'CRAFT BAKERY',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'signatures',
    title: 'Signature Creations',
    subtitle: 'Inventive Coffee Mixology',
    description: 'Original Okiro drink concepts such as our Vietnamese Coconut Cloud Coffee, Honey Miso Latte, and Sparkling Cascara botanicals that redefine caffeine rituals.',
    tag: 'CURATED DRINKS',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'space',
    title: 'The Architectural Space',
    subtitle: 'A Sanctuary to Linger',
    description: 'Soaring double-height ceilings, warm natural terracotta, blonde timber, lush indoor foliage, and gentle morning sunlight designed for unhurried conversation.',
    tag: 'ATMOSPHERE & DESIGN',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Single Origin Espresso',
    category: 'coffee',
    description: 'Double extraction of seasonal micro-lot Arabica. Vibrant stone fruit brightness, dark cacao body, velvety finish.',
    price: '₹190',
    notes: 'Kalladdeverapura Estate · Washed',
    tags: ['Double Shot', 'House Roast']
  },
  {
    id: 'c2',
    name: 'Manual Pour-Over (V60 / Kalita)',
    category: 'coffee',
    description: 'Slow pour-over extraction spotlighting delicate floral jasmine, sweet citrus rind, and clean tea-like translucency.',
    price: '₹240',
    notes: 'Chikmagalur Red Honey Process · Light Roast',
    badge: 'Barista Choice',
    tags: ['Filter', 'Single Origin']
  },
  {
    id: 'c3',
    name: 'Central India AeroPress Cup',
    category: 'coffee',
    description: 'Immersion and gentle pressure extraction yielding rich sweetness, rounded milk chocolate notes, and juicy stone fruit.',
    price: '₹230',
    notes: 'Araku Valley Organic · Medium Roast',
    tags: ['Aeropress', 'Championship Recipe']
  },
  {
    id: 'c4',
    name: 'Artisan Flat White',
    category: 'coffee',
    description: 'Double ristretto blended with silkily textured microfoam. Intense espresso notes harmonized with velvety natural milk sweetness.',
    price: '₹220',
    notes: 'Available with Dairy or Almond / Oat Milk',
    tags: ['Espresso', 'Microfoam']
  },
  {
    id: 'c5',
    name: 'Cortado',
    category: 'coffee',
    description: 'Equal parts bold espresso and velvety steamed milk in a signature Gibraltar tumbler.',
    price: '₹210',
    notes: '1:1 ratio for espresso purists',
    tags: ['Espresso']
  },

  // SIGNATURES
  {
    id: 's1',
    name: 'Vietnamese Coconut Cloud Coffee',
    category: 'signatures',
    description: 'Okiro’s beloved signature: chilled bold dark roast espresso crowned with a luscious whipped, velvety condensed coconut cloud.',
    price: '₹290',
    notes: 'House Signature · Sweet & Indulgent',
    badge: 'Signature',
    tags: ['Cold', 'Coconut Cream']
  },
  {
    id: 's2',
    name: 'Honey Miso Latte',
    category: 'signatures',
    description: 'Subtle white shiro miso paired with wild raw honey and silky microfoam, lending a hypnotic sweet-savory complexity.',
    price: '₹270',
    notes: 'Japanese Umami Infusion',
    badge: 'Chef Creation',
    tags: ['Hot / Iced', 'Umami']
  },
  {
    id: 's3',
    name: 'Sea Salt Mocha Nirvana',
    category: 'signatures',
    description: 'Rich 70% Indian single-origin melted cacao, double espresso, velvety steamed milk, finished with hand-harvested flaky sea salt.',
    price: '₹260',
    notes: 'Artisanal Single-Origin Cocoa',
    tags: ['Hot', 'Dark Chocolate']
  },
  {
    id: 's4',
    name: 'Sparkling Cascara Tonic',
    category: 'signatures',
    description: 'Botanical infusion of dried coffee cherries (cascara), premium Indian tonic, fresh orange peel, and rosemary sprig.',
    price: '₹250',
    notes: 'Low Caffeine · Refreshing Botanical',
    tags: ['Effervescent', 'Cascara']
  },

  // COLD
  {
    id: 'cd1',
    name: '24-Hour Steeped Cold Brew',
    category: 'cold',
    description: 'Coarsely ground Chikmagalur beans steeped in icy mountain water for 24 unhurried hours. Silky, chocolatey, ultra-low acidity.',
    price: '₹230',
    notes: 'Steeped In-House Daily',
    tags: ['Cold Brew', 'Zero Acidity']
  },
  {
    id: 'cd2',
    name: 'Citrus Tonic Cold Brew',
    category: 'cold',
    description: 'Concentrated cold brew floated gracefully over bubbly elderflower tonic and dehydrated blood orange wheel.',
    price: '₹260',
    notes: 'Brisk & Effervescent',
    tags: ['Sparkling', 'Citrus']
  },
  {
    id: 'cd3',
    name: 'Kyoto-Style Slow Drip',
    category: 'cold',
    description: 'Single drops of cold water passing through freshly ground coffee over 8 hours in our glass tower. Delicate whiskey-like body.',
    price: '₹280',
    notes: 'Limited Daily Yield · Glass Tower',
    badge: 'Limited Batch',
    tags: ['Cold Drip', 'Reserve']
  },
  {
    id: 'cd4',
    name: 'Uji Ceremonial Iced Matcha Latte',
    category: 'cold',
    description: 'Stone-ground ceremonial grade green tea from Kyoto, freshly whisked with bamboo chasen and poured over chilled oat milk.',
    price: '₹280',
    notes: '100% Ceremonial Kyoto Matcha',
    tags: ['Matcha', 'Oat Milk']
  },

  // FOOD (100% Vegetarian Craft Kitchen)
  {
    id: 'f1',
    name: 'Wild Mushroom & Truffle Sourdough',
    category: 'food',
    description: 'House-fermented sourdough toast layered with pan-seared shiitake and oyster mushrooms, garlic thyme butter, and white truffle glaze.',
    price: '₹340',
    notes: 'Fresh Sourdough · 100% Vegetarian',
    badge: 'Kitchen Favorite',
    tags: ['Sourdough', 'Truffle'],
    isVegetarian: true
  },
  {
    id: 'f2',
    name: 'Hass Avocado & Dukkah Tartine',
    category: 'food',
    description: 'Crushed ripe Hass avocado, slow-roasted heirloom cherry tomatoes, Egyptian dukkah spice crunch, micro coriander on toasted country bread.',
    price: '₹360',
    notes: 'Nutrient Rich · Artisanal Bread',
    tags: ['Avocado', 'Sourdough'],
    isVegetarian: true
  },
  {
    id: 'f3',
    name: 'Spicy Truffle Edamame Bao (3 pcs)',
    category: 'food',
    description: 'Fluffy handmade steamed lotus buns stuffed with glazed portobello mushrooms, edamame crunch, pickled daikon, and spicy kewpie.',
    price: '₹320',
    notes: 'Steamed to Order',
    tags: ['Bao', 'Pan Asian'],
    isVegetarian: true
  },
  {
    id: 'f4',
    name: 'Smoked Shio-Miso Ramen Bowl',
    category: 'food',
    description: 'A rich 12-hour vegetable and roasted konbu dashi broth, springy ramen noodles, charred corn, glazed tofu steak, and toasted sesame.',
    price: '₹390',
    notes: 'Deep Warming Broth',
    tags: ['Ramen', 'Japanese'],
    isVegetarian: true
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Japanese Cloud Soufflé Pancakes',
    category: 'desserts',
    description: 'Extraordinarily light and jiggly soufflé pancakes served with whipped honeycomb butter, pure grade-A maple syrup, and fresh seasonal berries.',
    price: '₹340',
    notes: 'Whipped and Baked Fresh to Order (allow 15 mins)',
    badge: 'Must Try',
    tags: ['Pancakes', 'Warm'],
    isVegetarian: true
  },
  {
    id: 'd2',
    name: 'Kyoto Matcha Chiffon Roll',
    category: 'desserts',
    description: 'Airy sponge infused with stone-ground Japanese matcha, rolled around Madagascar vanilla chantilly cream and candied red beans.',
    price: '₹260',
    notes: 'Delicate & Subtly Sweet',
    tags: ['Matcha', 'Chilled'],
    isVegetarian: true
  },
  {
    id: 'd3',
    name: 'San Sebastián Basque Burnt Cheesecake',
    category: 'desserts',
    description: 'Classic burnished Spanish cheesecake with a deeply caramelized exterior and a velvety, molten cream cheese center.',
    price: '₹290',
    notes: 'Baked In-House Daily',
    tags: ['Cheesecake', 'Gluten Free Friendly'],
    isVegetarian: true
  },
  {
    id: 'd4',
    name: 'Pain au Chocolat & Almond Cruffin',
    category: 'desserts',
    description: 'Flaky 72-layer laminated pastry filled with Valrhona dark chocolate ganache and roasted slivered almonds.',
    price: '₹220',
    notes: 'Pure Butter Lamination',
    tags: ['Viennoiserie', 'Bakery'],
    isVegetarian: true
  }
];

export const COFFEE_FEATURE: CoffeeFeature = {
  origin: 'Chikmagalur & Coorg, Western Ghats, India',
  estate: 'Kalladdeverapura & Ratnagiri Mountain Estates',
  altitude: '1,250 – 1,450 MASL (High Altitude Shade-Grown)',
  roastLevel: 'Light-Medium Omniroast (In-House Roastery)',
  process: 'Yellow Honey & Anaerobic Natural',
  notes: ['Ripe Nectarine', 'Wild Forest Honey', 'Cacao Nibs', 'Jasmine Blossom'],
  brewMethods: ['Precision V60 Pour-Over', 'Custom Immersion AeroPress', '9-Bar Naked Portafilter Espresso', 'Kyoto Slow Ice Tower'],
  description: 'At Okiro, coffee is treated not as a commodity, but as a living agricultural harvest. We partner directly with multigenerational coffee farmers nestled in the misty rainforests of the Western Ghats. Roasted on-site in small batches, every profile is calibrated to unleash the innate terroir, complex florals, and sparkling sweetness of Indian specialty beans.'
};

export const REVIEWS: Testimonial[] = [
  {
    id: 'r1',
    quote: 'Okiro has completely redefined what a café can be in Raipur. The manual pour-over bar rivaling top specialty coffee roasters in Tokyo and Melbourne, coupled with warm, stunning architecture. An absolute sanctuary.',
    author: 'Aarav Singhania',
    designation: 'Architect & Specialty Coffee Patron',
    platform: 'Google Review',
    rating: 5
  },
  {
    id: 'r2',
    quote: 'The Vietnamese Coconut Cloud Coffee and the wild mushroom sourdough are unmatched. You feel the care in every detail — from the curated acoustics to the warm earthy materials and courteous baristas.',
    author: 'Dr. Meera Agrawal',
    designation: 'Raipur Resident',
    platform: 'Google Review',
    rating: 5
  },
  {
    id: 'r3',
    quote: 'Watching Okiro host the AeroPress Championship and build a true specialty coffee culture in Central India is extraordinary. There is no café in Chhattisgarh with this level of craftsmanship and aesthetic restraint.',
    author: 'Kunal Verma',
    designation: 'Coffee Enthusiast & Food Critic',
    platform: 'Specialty Coffee Guide',
    rating: 5
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=900&q=85',
    caption: 'Slow mornings at the manual brew bar. Chikmagalur yellow honey dripping through V60 paper.',
    likes: '1.4k',
    tag: '#OkiroRituals'
  },
  {
    id: 'ig2',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85',
    caption: 'Precision extraction. Golden crema, balance, and notes of wild forest honey.',
    likes: '2.1k',
    tag: '#SpecialtyCoffee'
  },
  {
    id: 'ig3',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85',
    caption: 'Sunlight washing over our VIP Estate sanctuary. A space created to slow down and stay.',
    likes: '3.2k',
    tag: '#OkiroSpace'
  },
  {
    id: 'ig4',
    imageUrl: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=900&q=85',
    caption: 'Our signature Vietnamese Coconut Cloud Coffee in afternoon light. Silky, cool, unforgettable.',
    likes: '1.9k',
    tag: '#OkiroSignatures'
  },
  {
    id: 'ig5',
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=85',
    caption: 'Fresh from the morning bake: warm laminated cruffins with Tahitian vanilla bean cream.',
    likes: '2.6k',
    tag: '#OkiroBakery'
  },
  {
    id: 'ig6',
    imageUrl: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85',
    caption: 'Conversations that linger past twilight. Open every evening until 11:30 PM in Raipur.',
    likes: '1.8k',
    tag: '#EveningAtOkiro'
  }
];

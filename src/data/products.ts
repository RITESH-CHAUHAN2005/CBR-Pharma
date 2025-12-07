export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
  prescriptionRequired: boolean;
  inStock: boolean;
  description: string;
  composition?: string;
  directions?: string;
  sideEffects?: string;
  tags?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    brand: "CBR Generic",
    category: "OTC & Wellness",
    price: 45,
    originalPrice: 60,
    discount: 25,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    rating: 4.5,
    reviewCount: 234,
    prescriptionRequired: false,
    inStock: true,
    description: "Fast-acting pain relief and fever reducer. Suitable for headaches, body aches, and cold symptoms.",
    composition: "Paracetamol IP 500mg",
    directions: "Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    sideEffects: "Rare side effects may include allergic reactions. Consult doctor if symptoms persist.",
    tags: ["bestseller", "fever", "pain relief"]
  },
  {
    id: "2",
    name: "Vitamin D3 60000 IU",
    brand: "HealthVit",
    category: "Health Supplements",
    price: 320,
    originalPrice: 400,
    discount: 20,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400",
    rating: 4.8,
    reviewCount: 567,
    prescriptionRequired: false,
    inStock: true,
    description: "High-potency Vitamin D3 supplement for bone health and immune support.",
    composition: "Cholecalciferol 60000 IU",
    directions: "Take one capsule weekly with a meal or as directed by physician.",
    tags: ["immunity", "bones", "weekly dose"]
  },
  {
    id: "3",
    name: "Azithromycin 500mg",
    brand: "CBR Pharma",
    category: "Prescription Medicines",
    price: 180,
    originalPrice: 220,
    discount: 18,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400",
    rating: 4.6,
    reviewCount: 189,
    prescriptionRequired: true,
    inStock: true,
    description: "Broad-spectrum antibiotic for bacterial infections.",
    composition: "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    directions: "As prescribed by physician. Complete the full course.",
    sideEffects: "May cause nausea, diarrhea. Consult doctor if severe.",
    tags: ["antibiotic", "prescription"]
  },
  {
    id: "4",
    name: "Omega-3 Fish Oil",
    brand: "NutriWell",
    category: "Health Supplements",
    price: 450,
    originalPrice: 550,
    discount: 18,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400",
    rating: 4.7,
    reviewCount: 432,
    prescriptionRequired: false,
    inStock: true,
    description: "Pure fish oil capsules rich in EPA and DHA for heart and brain health.",
    composition: "Fish Oil 1000mg (EPA 180mg, DHA 120mg)",
    directions: "Take 1-2 capsules daily with meals.",
    tags: ["heart health", "brain", "omega"]
  },
  {
    id: "5",
    name: "Digital Thermometer",
    brand: "MediTech",
    category: "Medical Devices",
    price: 199,
    originalPrice: 299,
    discount: 33,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400",
    rating: 4.4,
    reviewCount: 876,
    prescriptionRequired: false,
    inStock: true,
    description: "Accurate digital thermometer with quick reading and fever alarm.",
    directions: "Clean tip before use. Place under tongue for 60 seconds.",
    tags: ["device", "temperature", "home care"]
  },
  {
    id: "6",
    name: "Baby Diaper Rash Cream",
    brand: "BabyCare Plus",
    category: "Baby Care",
    price: 175,
    originalPrice: 210,
    discount: 17,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
    rating: 4.9,
    reviewCount: 321,
    prescriptionRequired: false,
    inStock: true,
    description: "Gentle zinc oxide cream for prevention and treatment of diaper rash.",
    composition: "Zinc Oxide 10%, Aloe Vera, Vitamin E",
    directions: "Apply liberally at each diaper change.",
    tags: ["baby", "skin care", "gentle"]
  },
  {
    id: "7",
    name: "Blood Pressure Monitor",
    brand: "Omron",
    category: "Medical Devices",
    price: 1850,
    originalPrice: 2500,
    discount: 26,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
    rating: 4.8,
    reviewCount: 654,
    prescriptionRequired: false,
    inStock: true,
    description: "Automatic digital BP monitor with memory function and irregular heartbeat detection.",
    directions: "Sit calmly for 5 minutes before taking reading. Follow user manual.",
    tags: ["device", "BP monitor", "home care"]
  },
  {
    id: "8",
    name: "Multivitamin for Men",
    brand: "ManVit Pro",
    category: "Health Supplements",
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    rating: 4.6,
    reviewCount: 412,
    prescriptionRequired: false,
    inStock: true,
    description: "Complete daily multivitamin with minerals formulated for men's health.",
    composition: "Vitamins A, B-complex, C, D, E, Zinc, Selenium, and more",
    directions: "Take one tablet daily with breakfast.",
    tags: ["men's health", "daily", "vitamins"]
  },
  {
    id: "9",
    name: "Antiseptic Liquid",
    brand: "Dettol",
    category: "Personal Care",
    price: 125,
    originalPrice: 150,
    discount: 17,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400",
    rating: 4.7,
    reviewCount: 1234,
    prescriptionRequired: false,
    inStock: true,
    description: "Multi-purpose antiseptic liquid for wound cleaning and hygiene.",
    directions: "Dilute with water for wound cleaning. Use undiluted for surfaces.",
    tags: ["hygiene", "antiseptic", "essential"]
  },
  {
    id: "10",
    name: "Metformin 500mg",
    brand: "CBR Pharma",
    category: "Prescription Medicines",
    price: 85,
    originalPrice: 110,
    discount: 23,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    rating: 4.5,
    reviewCount: 876,
    prescriptionRequired: true,
    inStock: true,
    description: "Oral diabetes medicine that helps control blood sugar levels.",
    composition: "Metformin Hydrochloride 500mg",
    directions: "As prescribed by physician. Take with meals.",
    sideEffects: "May cause mild stomach upset initially.",
    tags: ["diabetes", "prescription", "sugar control"]
  },
  {
    id: "11",
    name: "Hand Sanitizer 500ml",
    brand: "SafeHands",
    category: "Personal Care",
    price: 149,
    originalPrice: 199,
    discount: 25,
    image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?w=400",
    rating: 4.4,
    reviewCount: 2341,
    prescriptionRequired: false,
    inStock: true,
    description: "Alcohol-based hand sanitizer with moisturizers. Kills 99.9% germs.",
    composition: "Isopropyl Alcohol 70%, Aloe Vera, Glycerin",
    directions: "Apply liberally to hands and rub until dry.",
    tags: ["hygiene", "sanitizer", "essential"]
  },
  {
    id: "12",
    name: "Calcium + Vitamin D3",
    brand: "BoneStrong",
    category: "Health Supplements",
    price: 340,
    originalPrice: 450,
    discount: 24,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    rating: 4.6,
    reviewCount: 543,
    prescriptionRequired: false,
    inStock: true,
    description: "Essential supplement for strong bones and teeth.",
    composition: "Calcium Carbonate 1250mg, Vitamin D3 250 IU",
    directions: "Take one tablet twice daily with meals.",
    tags: ["bones", "calcium", "women's health"]
  }
];

export const categories = [
  {
    id: "prescription",
    name: "Prescription Medicines",
    icon: "💊",
    description: "Doctor-prescribed medications",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400"
  },
  {
    id: "otc",
    name: "OTC & Wellness",
    icon: "🩹",
    description: "Over-the-counter medicines",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"
  },
  {
    id: "supplements",
    name: "Health Supplements",
    icon: "💪",
    description: "Vitamins and minerals",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400"
  },
  {
    id: "personal",
    name: "Personal Care",
    icon: "🧴",
    description: "Hygiene and skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400"
  },
  {
    id: "devices",
    name: "Medical Devices",
    icon: "🩺",
    description: "Healthcare equipment",
    image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?w=400"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Excellent service! Got my medicines delivered within 24 hours. The quality is genuine and prices are very competitive.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    comment: "CBR Pharma has become my go-to pharmacy. Their customer support is amazing and prescription upload is so easy.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: "3",
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    comment: "As a diabetic patient, I need regular medicines. CBR Pharma's subscription service is a lifesaver!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: "4",
    name: "Vikram Singh",
    location: "Chennai",
    rating: 4,
    comment: "Great discounts on supplements. Fast delivery and proper packaging. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    id: "5",
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "The pharmacist consultation feature is wonderful. Got all my queries answered professionally.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
  }
];

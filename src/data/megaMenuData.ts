export interface SubMenuItem {
  id: string;
  name: string;
  slug: string;
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  subItems: SubMenuItem[];
}

export const megaMenuData: MenuItem[] = [
  {
    id: "prescription-medicines",
    name: "Prescription Medicines",
    slug: "prescription-medicines",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    subItems: [
      { id: "antibiotics", name: "Antibiotics", slug: "antibiotics" },
      { id: "antidiabetics", name: "Antidiabetics", slug: "antidiabetics" },
      { id: "cardiovascular", name: "Cardiovascular Drugs", slug: "cardiovascular" },
      { id: "antihypertensives", name: "Antihypertensives", slug: "antihypertensives" },
      { id: "analgesics", name: "Pain Relief / Analgesics", slug: "analgesics" },
      { id: "antiallergics", name: "Anti-Allergics", slug: "antiallergics" },
      { id: "gastrointestinal", name: "Gastrointestinal Medicines", slug: "gastrointestinal" },
      { id: "neurological", name: "Neurological Medicines", slug: "neurological" },
    ]
  },
  {
    id: "otc-medicines",
    name: "OTC Medicines",
    slug: "otc-medicines",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400",
    subItems: [
      { id: "cold-cough", name: "Cold & Cough Remedies", slug: "cold-cough" },
      { id: "fever-reducers", name: "Fever Reducers", slug: "fever-reducers" },
      { id: "digestive-aids", name: "Digestive Aids", slug: "digestive-aids" },
      { id: "antacids", name: "Antacids & Acid Blockers", slug: "antacids" },
      { id: "pain-relief", name: "Pain Relief Tablets", slug: "pain-relief" },
      { id: "first-aid", name: "First Aid Supplies", slug: "first-aid" },
      { id: "antiseptics", name: "Antiseptics & Creams", slug: "antiseptics" },
    ]
  },
  {
    id: "vitamins-supplements",
    name: "Vitamins & Supplements",
    slug: "vitamins-supplements",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    subItems: [
      { id: "multivitamins", name: "Multivitamins", slug: "multivitamins" },
      { id: "vitamin-d", name: "Vitamin D & Calcium", slug: "vitamin-d" },
      { id: "vitamin-b", name: "Vitamin B Complex", slug: "vitamin-b" },
      { id: "iron-supplements", name: "Iron Supplements", slug: "iron-supplements" },
      { id: "omega-3", name: "Omega-3 & Fish Oil", slug: "omega-3" },
      { id: "probiotics", name: "Probiotics", slug: "probiotics" },
      { id: "protein-powders", name: "Protein Powders", slug: "protein-powders" },
    ]
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    slug: "diabetes-care",
    image: "https://images.unsplash.com/photo-1593491034932-844ab981ed7c?w=400",
    subItems: [
      { id: "glucose-monitors", name: "Glucose Monitors", slug: "glucose-monitors" },
      { id: "test-strips", name: "Test Strips", slug: "test-strips" },
      { id: "insulin-syringes", name: "Insulin Syringes", slug: "insulin-syringes" },
      { id: "diabetic-foot-care", name: "Diabetic Foot Care", slug: "diabetic-foot-care" },
      { id: "sugar-free-products", name: "Sugar-Free Products", slug: "sugar-free-products" },
    ]
  },
  {
    id: "cardiac-care",
    name: "Cardiac Care",
    slug: "cardiac-care",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400",
    subItems: [
      { id: "bp-monitors", name: "BP Monitors", slug: "bp-monitors" },
      { id: "cholesterol-management", name: "Cholesterol Management", slug: "cholesterol-management" },
      { id: "heart-health-supplements", name: "Heart Health Supplements", slug: "heart-health-supplements" },
      { id: "ecg-monitors", name: "ECG Monitors", slug: "ecg-monitors" },
    ]
  },
  {
    id: "respiratory-care",
    name: "Respiratory Care",
    slug: "respiratory-care",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400",
    subItems: [
      { id: "nebulizers", name: "Nebulizers", slug: "nebulizers" },
      { id: "oxygen-concentrators", name: "Oxygen Concentrators", slug: "oxygen-concentrators" },
      { id: "inhalers", name: "Inhalers & Spacers", slug: "inhalers" },
      { id: "pulse-oximeters", name: "Pulse Oximeters", slug: "pulse-oximeters" },
      { id: "cpap-bipap", name: "CPAP & BiPAP Machines", slug: "cpap-bipap" },
      { id: "steam-vaporizers", name: "Steam Vaporizers", slug: "steam-vaporizers" },
    ]
  },
  {
    id: "skin-care",
    name: "Skin Care",
    slug: "skin-care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    subItems: [
      { id: "moisturizers", name: "Moisturizers & Lotions", slug: "moisturizers" },
      { id: "sunscreens", name: "Sunscreens", slug: "sunscreens" },
      { id: "acne-treatment", name: "Acne Treatment", slug: "acne-treatment" },
      { id: "anti-fungal", name: "Anti-Fungal Creams", slug: "anti-fungal" },
      { id: "medicated-soaps", name: "Medicated Soaps", slug: "medicated-soaps" },
    ]
  },
  {
    id: "medical-devices",
    name: "Medical Devices",
    slug: "medical-devices",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    subItems: [
      { id: "thermometers", name: "Thermometers", slug: "thermometers" },
      { id: "wheelchairs", name: "Wheelchairs & Walkers", slug: "wheelchairs" },
      { id: "orthopedic-supports", name: "Orthopedic Supports", slug: "orthopedic-supports" },
      { id: "hearing-aids", name: "Hearing Aids", slug: "hearing-aids" },
      { id: "weighing-scales", name: "Weighing Scales", slug: "weighing-scales" },
      { id: "surgical-supplies", name: "Surgical Supplies", slug: "surgical-supplies" },
    ]
  },
];

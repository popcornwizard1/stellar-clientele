export const PHONES = ["09161621041", "07014664302", "09161711613"] as const;
export const WHATSAPP = "2349161621041";
export const OFFICE =
  "Suite B1/51 Mechanic Village, Opp. Northwest Filling Station, Asaba, Delta State";
export const RC = "RC 1545121";

export const INSTAGRAM = "https://www.instagram.com/dala_realestate/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61561503285621";
export const TIKTOK = "https://vm.tiktok.com/ZS9Bof2FGUrKx-Sw96u/";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

export type Estate = {
  id: string;
  name: string;
  phase: string;
  city: string;
  size: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  featured?: boolean;
  note: string;
};

export const estates: Estate[] = [
  {
    id: "awka-1",
    name: "Dala Home Estate Awka",
    phase: "Phase 1",
    city: "Awka, Anambra",
    size: "464 SQM",
    price: "₦4M",
    oldPrice: "₦5M",
    badge: "Allocation Month Promo",
    featured: true,
    note: "4-month plan: ₦1M initial deposit, ₦1M monthly.",
  },
  {
    id: "awka-2",
    name: "Dala Home Estate Awka",
    phase: "Phase 2",
    city: "Awka, Anambra",
    size: "464 SQM",
    price: "₦3M",
    badge: "Promo Price",
    note: "Lowest entry point into the fast-growing Awka corridor.",
  },
  {
    id: "asaba-1",
    name: "Dala Home Estate Asaba",
    phase: "Phase 1",
    city: "Asaba, Delta",
    size: "464 SQM",
    price: "₦10M",
    note: "Prime Asaba location, close to developed neighbourhoods.",
  },
  {
    id: "asaba-2",
    name: "Dala Home Estate Asaba",
    phase: "Phase 2",
    city: "Asaba, Delta",
    size: "464 SQM",
    price: "₦7M",
    note: "Strong resale demand with steady year-on-year appreciation.",
  },
  {
    id: "asaba-3",
    name: "Dala Home Estate Asaba",
    phase: "Phase 3",
    city: "Asaba, Delta",
    size: "464 SQM",
    price: "₦5M",
    note: "Newly opened phase — earliest buyers get the best positions.",
  },
  {
    id: "lagos-1",
    name: "Dala Estate Lagos",
    phase: "Phase 1",
    city: "Lekki axis, Lagos",
    size: "500 SQM",
    price: "₦20M",
    note: "Lagos land with the strongest long-term capital growth.",
  },
  {
    id: "lagos-2",
    name: "Dala Estate Lagos",
    phase: "Phase 2",
    city: "Lekki axis, Lagos",
    size: "500 SQM",
    price: "₦15M",
    note: "Same Lagos advantage at a friendlier entry price.",
  },
];

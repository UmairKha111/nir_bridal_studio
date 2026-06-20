/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stats {
  posts: number;
  followers: string;
  following: number;
  experience: string;
  clientsServed: string;
  studentsTrained: string;
}

export interface Profile {
  handle: string;
  name: string;
  title: string;
  bioPhrase: string;
  whatsappLink: string;
  location: string;
  profileImage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "bridal" | "party" | "cocktail" | "student" | "before-after";
  imageUrl: string;
  beforeImageUrl?: string; // Optional for before/after look comparison
  description: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels" | "Intermediate to Advanced";
  type: "1:1 Masterclass" | "Professional Batch" | "Group Workshop";
  description: string;
  syllabus: string[];
  price?: string; // e.g. "Contact for details"
  imageUrl: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: "Bride" | "Student" | "Party Makeup Client" | "Co-Artist";
  text: string;
  rating: number;
  date: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stats;
  biography: {
    paragraphs: string[];
    philosophy: string;
    specialties: string[];
  };
  courses: Course[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
}

/**
 * CUSTOMIZATION NOTE: 
 * You can change any text, numbers, or images on this website simply by editing this file!
 * To replace an image, change the URL to your own image path (e.g., "/assets/my-image.jpg" or an online CDN link).
 */
export const portfolioData: PortfolioData = {
  profile: {
    handle: "nir_bridal_studio",
    name: "Nirali Patel",
    title: "Makeup & Hairstyle Artist",
    bioPhrase: "Creating timeless makeup looks, sophisticated hairstyles, and inspiring the next generation of beauty artists through professional education and artistry.",
    whatsappLink: "https://wa.me/message/7HX4WYKD2WEDB1", // From Instagram screenshots
    location: "Kathodra, Surat",
    // Premium, high-quality makeup artist portrait url
    profileImage: "https://i.ibb.co/Lb8PdBS/Chat-GPT-Image-Jun-19-2026-03-10-32-PM.png"
  },
  stats: {
    posts: 500,
    followers: "4.9K+",
    experience: "5+ Years",
    clientsServed: "400+",
    studentsTrained: "50+"
  },
 biography: {
  paragraphs: [
    "Nirali Kunjadiya is a renowned Bridal Makeup & Hairstyling Artist and certified Educator based in Surat, Gujarat. Through NIR_BRIDAL_STUDIO & ACADEMY, she has built a reputation for creating radiant bridal transformations, elegant hairstyles, and timeless beauty experiences that enhance every bride's natural charm and confidence.",
    
    "Her artistic approach focuses on flawless skin preparation, soft and long-lasting makeup, and customized hairstyling that complements each client's personality and occasion. From traditional bridal looks to modern glam makeovers, Nirali's dedication to detail and passion for beauty have made her a trusted name among brides and beauty enthusiasts across Surat and beyond.",

    "Alongside her bridal artistry, Nirali is deeply committed to beauty education. She mentors aspiring makeup artists and hairstylists through professional courses, personalized training sessions, and practical workshops, helping students transform their passion into successful careers in the beauty industry."
  ],

  philosophy:
    "Beauty is not about changing who you are, but enhancing your confidence and individuality. My mission is to create timeless makeup and hairstyle experiences while empowering future beauty professionals through creativity and education.",

  specialties: [
    "Bridal Makeup & Signature Hairstyling",
    "HD, Soft Glam & Long-lasting Bridal Looks",
    "Party Makeup, Reception & Occasion Styling",
    "Modern Buns, Braids & Trendy Hairstyles",
    "Professional Makeup & Hairstyling Education"
  ]
},
  courses: [
    {
      id: "pro-bridal-mastery",
      title: "Professional Bridal Mastery Certification",
      duration: "4 Weeks (Intensive)",
      level: "Intermediate to Advanced",
      type: "Professional Batch",
      description: "A comprehensive, intensive program designed for aspiring and practicing artists seeking to elevate their skill to the premium bridal tier. Learn signature bases, diverse traditional styling, and business monetization.",
      syllabus: [
        "Advanced Skin Anatomy, Science & Prep Masterclass",
        "Priyanka's Signature Airbrush vs. HD Flawless Base Styling",
        "Eye Artistry: Cut crease, Smokey base, Glitter application & Lashes",
        "Traditional North Indian, South Indian & Modern Fusion Bride Looks",
        "Client Consultation, Pricing Strategy, and Portfolio Building"
      ],
      price: "Inquire for Pricing",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["Hands-on practical sessions with live models", "Professional portfolio photoshoot included", "Government & Premium Academy-recognized Certification", "Lifetime product guidance & mentorship group access"]
    },
    {
      id: "self-makeup-1on1",
      title: "1:1 Personal Self-Makeup Masterclass",
      duration: "3 Days (Personalized)",
      level: "Beginner",
      type: "1:1 Masterclass",
      description: "Master the art of doing your own makeup like a pro. A fully personalized 1-on-1 experience tailored strictly to your unique facial features, skin type, lifestyle, and beauty desires.",
      syllabus: [
        "Skin analysis and creating your custom everyday skincare routine",
        "Perfecting the 10-Minute Daily No-Makeup base technique",
        "Transforming Day Looks into high-glam Cocktail & Party Makeup",
        "Understanding your personal vanity: Product selection & shopping list"
      ],
      price: "Custom booking",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["100% individual attention from Priyanka", "Custom skin & feature matching chart", "Bring-Your-Own-Vanity audit & personal shopping guide"]
    },
    {
      id: "cocktail-editorial",
      title: "Advanced Cocktail & Editorial Artistry Workshop",
      duration: "5 Days (Masterclass)",
      level: "Intermediate",
      type: "Group Workshop",
      description: "Deep dive into hot global makeup trends: extreme dewy finishes, glass skin aesthetics, graphic colors, and editorial glams suited for cocktail parties, sangeets, and pre-wedding functions.",
      syllabus: [
        "Mastering the 'Glass Skin' look & long-lasting high-dew finishes",
        "Modern Graphic Eyeliner, Foils & Halo Eye artistry",
        "Contouring & Highlighting based on distinct facial structures",
        "Social media self-promotion & professional lighting hacks"
      ],
      price: "Inquire for batch dates",
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800&h=500",
      highlights: ["Learn trending cocktail glams & premium photography styling", "Access to premium products and tools in-class", "Digital Certificate of Completion"]
    }
  ],
  gallery: [
    {
      id: "look-1",
      title: "The Regal Indian Crimson Bride",
      category: "bridal",
      imageUrl: "https://i.ibb.co/PsBHVN0H/8776854f-d67b-48e2-b643-bad5a9bf49d2.png",
      beforeImageUrl: "https://i.ibb.co/PsBHVN0H/8776854f-d67b-48e2-b643-bad5a9bf49d2.png", // Elegant representation for slider
      description: "A signature traditional red-lehenga bridal look featuring a flawless HD matte base, classic gold glitter cut-crease eye makeup, and a perfect bold crimson lip."
    },
    {
      id: "look-2",
      title: "Ethereal Pastel Dewy Glam",
      category: "bridal",
      imageUrl: "https://i.ibb.co/hFsFv45M/3dc19a89-b175-40f2-baae-fcdbff1473c6.png",
      description: "Soft pink dewy base paired with monochromatic pastel eye tones and a glossy lip. Crafted meticulously for a modern daytime luxury destination wedding."
    },
    {
      id: "look-3",
      title: "Smokey Halo Sangeet Glam",
      category: "cocktail",
      imageUrl: "https://i.ibb.co/B5CGjZNr/57425dba-7fca-4ff0-b050-1095bd69de9f.png",
      description: "A high-drama metallic gold halo eye paired with a warm contour and satin finish nude lips, curated to withstand hours of intense dancing."
    },
    {
      id: "look-4",
      title: "Glowy Intimate Mehndi Glow",
      category: "party",
      imageUrl: "https://i.ibb.co/qbPLwrT/824f750c-29be-4b5b-bb8a-2f2401d68174.png",
      description: "Sun-kissed bronzed glow with minimal base and beautiful peach accents. Ideal for outdoor daytime pre-wedding celebrations."
    },
    {
      id: "look-5",
      title: "Masterclass Graduation Glam",
      category: "student",
      imageUrl: "https://i.ibb.co/FkpcxdFk/7159369b-12a6-4002-ac61-ea292b3cf3e2.png",
      description: "Demonstration model created live during the Professional Certification batch, illustrating complex skin texture correction and dual-tone blending."
    },
    {
      id: "look-6",
      title: "Royal Velvet Cocktail Elegance",
      category: "cocktail",
      imageUrl: "https://i.ibb.co/S4tTvp6G/a67c9273-d904-48ef-b21e-395ed30ff74c.png",
      description: "Intense matte contoured base, deep dual-tone smokey eye, and warm cinnamon lips. Designed for evening high-society cocktail dinners."
    },
    {
      id: "look-7",
      title: "Student Practical Exam: Classic Wing",
      category: "student",
      imageUrl: "https://i.ibb.co/XrxSDjj5/15f812b8-e964-47da-a2be-1cf95515248c.png",
      description: "A beautifully executed winged graphic layout and clean glowing finish delivered independently by a student under Priyanka's strict personal evaluation."
    },
    {
      id: "look-8",
      title: "The Royal Minimalist Nikki Bride",
      category: "bridal",
      imageUrl: "https://i.ibb.co/XrxSDjj5/15f812b8-e964-47da-a2be-1cf95515248c.png",
      description: "Timeless elegance with soft lash definitions, subtle champagne shadows, and a velvet matte rose lip for a serene daytime wedding aesthetic."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Kriti Sharma",
      role: "Bride",
      text: "Booking Ma'am for my wedding was the finest decision I made! My base did not crease or budge even after hours of emotional ceremonies and intense camera flashes. I received endless compliments on my glowy, non-cakey look!",
      rating: 5,
      date: "May 2026"
    },
    {
      id: "t2",
      name: "Riya Sethi",
      role: "Student",
      text: "The Professional Bridal Mastery course transformed my perspective toward makeup. Ma'am teaches with absolute passion and hides zero secrets—from the science of skin prep to tricks about lighting and clients, she taught everything!",
      rating: 5,
      date: "April 2026"
    },
    {
      id: "t3",
      name: "Navya Gupta",
      role: "Party Makeup Client",
      text: "I booked Priyanka for my brother's Cocktail and Sangeet party. She did an incredibly chic metallic-halo eye look that matched my velvet gown. The dewy look was fresh, comfortable, and absolutely flawless!",
      rating: 5,
      date: "February 2026"
    },
    {
      id: "t4",
      name: "Meera Oberoi",
      role: "Bride",
      text: "Ma'am bridal styling is luxury at its best. She is calm, professional, and listens closely to your preferences. She understood my vision of a soft pastel destination lookup completely. Absolute magician!",
      rating: 5,
      date: "January 2026"
    },
    {
      id: "t5",
      name: "Diksha Arora",
      role: "Student",
      text: "The 1:1 Personal Masterclass was spectacular. I used to think doing a base is hard, but her step-by-step guidance made it so easy. Now I do my everyday and evening party look seamlessly. Worth every single penny!",
      rating: 5,
      date: "March 2026"
    }
  ]
};

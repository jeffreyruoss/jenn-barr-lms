export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  lessons: number;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Color Theory",
    description: "Master the science behind perfect color matching and formulation techniques.",
    price: 299,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    duration: "6 weeks",
    lessons: 24,
  },
  {
    id: 2,
    title: "Extensions Masterclass",
    description: "From basics to advanced installation techniques for flawless extensions.",
    price: 399,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    duration: "8 weeks",
    lessons: 32,
  },
  {
    id: 3,
    title: "Business of Beauty",
    description: "Build and scale your salon empire with proven business strategies.",
    price: 249,
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop",
    duration: "4 weeks",
    lessons: 16,
  },
];

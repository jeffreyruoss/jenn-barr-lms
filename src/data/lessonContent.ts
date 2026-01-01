export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LessonContent {
  courseSlug: string;
  lessonId: number;
  sections: {
    title: string;
    content: string;
  }[];
  keyTakeaways: string[];
  quiz: QuizQuestion[];
}

export const lessonContent: LessonContent[] = [
  {
    courseSlug: "advanced-color-theory",
    lessonId: 1,
    sections: [
      {
        title: "Introduction to the Color Wheel",
        content: `The color wheel is the foundation of all color theory and your most valuable tool as a colorist. Developed by Sir Isaac Newton in 1666, the color wheel organizes colors in a way that shows their relationships to one another.

Understanding the color wheel allows you to predict how colors will interact, create harmonious color combinations, and most importantly, solve color correction challenges with confidence.`,
      },
      {
        title: "Primary, Secondary, and Tertiary Colors",
        content: `**Primary Colors** are the building blocks of all other colors. In hair color, we work with Red, Yellow, and Blue. These colors cannot be created by mixing other colors together.

**Secondary Colors** are created by mixing two primary colors:
- Red + Yellow = Orange
- Yellow + Blue = Green  
- Blue + Red = Violet

**Tertiary Colors** are created by mixing a primary color with an adjacent secondary color, giving us colors like red-orange, yellow-green, and blue-violet.`,
      },
      {
        title: "Warm vs. Cool Tones",
        content: `The color wheel is divided into warm and cool sides:

**Warm Tones** (Red, Orange, Yellow): These colors advance and appear closer. In hair, warm tones add richness and depth. They're associated with energy and vibrancy.

**Cool Tones** (Green, Blue, Violet): These colors recede and appear further away. In hair, cool tones create sophistication and can neutralize unwanted warmth.

Understanding this division is crucial for creating the perfect shade for your client's skin tone and desired outcome.`,
      },
      {
        title: "Complementary Colors in Hair",
        content: `Complementary colors sit directly across from each other on the color wheel. This relationship is the key to color correction:

- Red cancels Green
- Orange cancels Blue
- Yellow cancels Violet

When you encounter unwanted tones in your client's hair, you'll use the complementary color to neutralize it. For example, if your blonde client has brassy orange tones, you'll use a blue-based toner to neutralize the warmth.

This principle is why we use purple shampoo for blonde hair and why green-based colors help neutralize redness.`,
      },
    ],
    keyTakeaways: [
      "The color wheel is organized into primary, secondary, and tertiary colors",
      "Warm tones (red, orange, yellow) and cool tones (green, blue, violet) create different effects",
      "Complementary colors cancel each other out - essential for color correction",
      "Understanding these relationships allows you to predict color outcomes",
    ],
    quiz: [
      {
        id: 1,
        question: "Which colors are considered the primary colors in hair color theory?",
        options: [
          "Red, Orange, Yellow",
          "Red, Yellow, Blue",
          "Red, Green, Blue",
          "Yellow, Green, Violet",
        ],
        correctAnswer: 1,
        explanation: "Red, Yellow, and Blue are the primary colors. They cannot be created by mixing other colors and are the foundation for all other colors on the wheel.",
      },
      {
        id: 2,
        question: "What color would you use to neutralize unwanted orange tones in blonde hair?",
        options: ["Purple", "Green", "Blue", "Red"],
        correctAnswer: 2,
        explanation: "Blue is the complementary color to orange. Complementary colors sit across from each other on the color wheel and neutralize each other.",
      },
      {
        id: 3,
        question: "Which of the following is a secondary color?",
        options: ["Blue", "Yellow", "Green", "Red"],
        correctAnswer: 2,
        explanation: "Green is a secondary color, created by mixing the primary colors yellow and blue. Primary colors are red, yellow, and blue.",
      },
      {
        id: 4,
        question: "Purple shampoo is used on blonde hair because:",
        options: [
          "Purple makes hair shinier",
          "Violet neutralizes yellow tones",
          "It adds warmth to the hair",
          "Purple is a primary color",
        ],
        correctAnswer: 1,
        explanation: "Violet (purple) is the complementary color to yellow. When applied to blonde hair, it neutralizes unwanted yellow/brassy tones.",
      },
    ],
  },
  {
    courseSlug: "advanced-color-theory",
    lessonId: 2,
    sections: [
      {
        title: "Why Undertones Matter",
        content: `Understanding undertones is perhaps the most critical skill for any colorist. Every person has undertones in their skin, and every hair color has underlying pigments. Mastering undertone analysis ensures you create colors that flatter your clients and meet their expectations.

When undertones aren't properly considered, the result can be unflattering at best and a complete color disaster at worst. This is why consultation and proper analysis before any color service is non-negotiable.`,
      },
      {
        title: "Identifying Skin Undertones",
        content: `There are three main categories of skin undertones:

**Warm Undertones**: Look for yellow, golden, or peachy hues in the skin. Veins typically appear greenish. Warm-toned clients often tan easily and look best in gold jewelry.

**Cool Undertones**: Characterized by pink, red, or bluish hues. Veins appear more blue or purple. These clients may burn easily in the sun and silver jewelry tends to be more flattering.

**Neutral Undertones**: A mix of both warm and cool. Veins may appear blue-green. These clients are lucky—they can wear both gold and silver well!

**Pro Tip**: Have your client hold a white piece of paper near their face in natural lighting. This makes undertones much easier to identify.`,
      },
      {
        title: "The Underlying Pigment Principle",
        content: `Natural hair contains varying amounts of melanin that create underlying pigments. When you lighten hair, you're exposing these pigments:

**Level 1-4 (Dark)**: Red underlying pigment
**Level 5-6 (Medium)**: Red-Orange underlying pigment  
**Level 7 (Medium Blonde)**: Orange underlying pigment
**Level 8 (Light Blonde)**: Yellow-Orange underlying pigment
**Level 9-10 (Very Light)**: Yellow to Pale Yellow underlying pigment

This is why dark hair turns orange when bleached—you're seeing the exposed underlying pigment. Understanding this helps you plan your formulation to either neutralize or enhance these tones.`,
      },
      {
        title: "Matching Hair Color to Skin Tone",
        content: `The goal is to create harmony between the hair color and the client's natural coloring:

**For Warm Undertones**: Rich browns, golden blondes, copper reds, and warm chestnuts are typically most flattering. Avoid ashy tones that can make skin appear sallow.

**For Cool Undertones**: Ash browns, platinum blondes, burgundy reds, and cool espresso shades complement best. Avoid overly warm or orange-toned colors.

**For Neutral Undertones**: These clients have the most flexibility. Both warm and cool tones can work, giving you creative freedom.

Always show your client swatches and have an honest conversation about what will work best for their coloring and lifestyle.`,
      },
    ],
    keyTakeaways: [
      "Every client has warm, cool, or neutral undertones in their skin",
      "Natural hair has underlying pigments that are revealed during lightening",
      "Matching hair color to skin undertones creates the most flattering results",
      "Always analyze undertones during consultation before formulating",
    ],
    quiz: [
      {
        id: 1,
        question: "A client with greenish-appearing veins likely has which undertone?",
        options: ["Cool", "Warm", "Neutral", "Cannot be determined"],
        correctAnswer: 1,
        explanation: "Greenish veins typically indicate warm undertones. Cool undertones show as more blue or purple veins.",
      },
      {
        id: 2,
        question: "When lifting a level 5 natural brown, what underlying pigment would you expect to see?",
        options: ["Yellow", "Orange", "Red-Orange", "Pale Yellow"],
        correctAnswer: 2,
        explanation: "Level 5-6 hair contains red-orange underlying pigments. This is why medium brown hair often turns orange during the lightening process.",
      },
      {
        id: 3,
        question: "Which hair colors typically flatter clients with cool undertones?",
        options: [
          "Golden blonde and copper",
          "Ash brown and platinum blonde",
          "Warm chestnut and caramel",
          "Strawberry blonde and auburn",
        ],
        correctAnswer: 1,
        explanation: "Cool-toned clients are typically flattered by ash browns, platinum blondes, and cool-toned colors. Warm colors can clash with cool skin tones.",
      },
      {
        id: 4,
        question: "What is the best way to identify a client's undertone during consultation?",
        options: [
          "Ask them what colors they like to wear",
          "Look at their veins and hold white paper near their face in natural light",
          "Guess based on their hair color",
          "Undertones don't really matter for hair color",
        ],
        correctAnswer: 1,
        explanation: "Examining veins and using white paper in natural lighting are reliable methods. Looking at jewelry preference and how they tan can also help confirm your analysis.",
      },
    ],
  },
  {
    courseSlug: "advanced-color-theory",
    lessonId: 3,
    sections: [
      {
        title: "The Art and Science of Formulation",
        content: `Color formulation is where art meets science. While understanding color theory provides the foundation, formulation is where you apply that knowledge to create beautiful, predictable results.

A well-formulated color takes into account the starting level, target level, underlying pigments, desired tone, and the specific characteristics of the color line you're using. Master formulation, and you'll never be surprised by a color outcome again.`,
      },
      {
        title: "Understanding the Level System",
        content: `The level system describes how light or dark a color is, ranging from 1 (black) to 10 (lightest blonde):

**Level 1-3**: Black to Dark Brown
**Level 4-5**: Medium to Light Brown
**Level 6-7**: Dark to Medium Blonde
**Level 8-9**: Light to Very Light Blonde
**Level 10**: Lightest Blonde/Platinum

When formulating, you need to know:
1. Your client's current level
2. The target level
3. How many levels you're lifting or depositing

Remember: Color doesn't lift color. If your client has permanent color on their hair, you'll need a different approach than virgin hair.`,
      },
      {
        title: "Choosing Your Developer",
        content: `Developer (hydrogen peroxide) opens the cuticle and activates the color. Choosing the right volume is crucial:

**10 Volume (3%)**: Deposit only, no lift. Perfect for darker results, toning, or covering gray at the same level.

**20 Volume (6%)**: The workhorse developer. Lifts 1-2 levels. Standard for most color applications and gray coverage.

**30 Volume (9%)**: Lifts 2-3 levels. Use for significant lightening with permanent color.

**40 Volume (12%)**: Lifts 3-4 levels. High-lift colors only. Never use on the scalp with bleach.

**Golden Rule**: Always use the lowest volume that will achieve your desired result. Higher isn't always better—it can cause unnecessary damage.`,
      },
      {
        title: "Creating Your Formula",
        content: `Here's a systematic approach to formulation:

**Step 1**: Identify the starting level and underlying pigment
**Step 2**: Determine the target level and desired tone
**Step 3**: Calculate how many levels of lift are needed
**Step 4**: Select the appropriate developer
**Step 5**: Choose colors that will achieve the target AND neutralize any unwanted underlying pigment

**Example Formulation**:
- Starting: Natural level 6 (dark blonde with orange undertones)
- Target: Level 8 ash blonde
- Approach: Use level 8 ash (blue base) with 20 volume. The blue base will neutralize the orange while achieving the desired lift.

**Pro Tip**: Always write down your formulas and results. This creates a reference library for future appointments.`,
      },
    ],
    keyTakeaways: [
      "The level system ranges from 1 (black) to 10 (lightest blonde)",
      "Developer volume determines how much lift you'll achieve",
      "Always use the lowest developer volume that achieves your goal",
      "Systematic formulation considers starting point, target, and underlying pigments",
    ],
    quiz: [
      {
        id: 1,
        question: "What is the purpose of developer in hair color?",
        options: [
          "To add shine to the hair",
          "To open the cuticle and activate the color",
          "To condition the hair during processing",
          "To neutralize underlying pigments",
        ],
        correctAnswer: 1,
        explanation: "Developer (hydrogen peroxide) opens the hair cuticle allowing color molecules to penetrate, and provides the oxygen needed to activate the color.",
      },
      {
        id: 2,
        question: "Which developer would you use for deposit-only color with no lift?",
        options: ["10 Volume", "20 Volume", "30 Volume", "40 Volume"],
        correctAnswer: 0,
        explanation: "10 Volume (3%) is used for deposit only with no lift. It's perfect for going darker, toning, or refreshing color.",
      },
      {
        id: 3,
        question: "A client is natural level 5 and wants to be level 8. How many levels of lift are needed?",
        options: ["2 levels", "3 levels", "4 levels", "5 levels"],
        correctAnswer: 1,
        explanation: "From level 5 to level 8 requires 3 levels of lift (5→6→7→8). This would typically require 30 volume developer with permanent color.",
      },
      {
        id: 4,
        question: "Why is it important to document your color formulas?",
        options: [
          "It's required by law",
          "To charge the client correctly",
          "To recreate results and track what works",
          "Documentation isn't really necessary",
        ],
        correctAnswer: 2,
        explanation: "Documenting formulas allows you to recreate successful results, adjust formulas that didn't work perfectly, and maintain consistency for returning clients.",
      },
    ],
  },
];

export function getLessonContent(
  courseSlug: string,
  lessonId: number
): LessonContent | undefined {
  return lessonContent.find(
    (content) =>
      content.courseSlug === courseSlug && content.lessonId === lessonId
  );
}

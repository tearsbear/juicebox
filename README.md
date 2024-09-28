This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Run The Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure and Components

This project follows a custom Next.js structure. Here's an overview of the main directories and files:

```
/app
  /fonts
  /onboarding
  /walkthrough
  /components
    /core
      AlertDialog.tsx
      AnimatedText.tsx
      ButtonIcon.tsx
      Buttons.tsx
      CustomSwiper.tsx
      Header.tsx
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
```

### Key Components and Their Usage

1. `app/layout.tsx`: The root layout component that wraps all pages.
2. `app/page.tsx`: The main page component for the home route ("/").
3. `app/globals.css`: Global styles for the entire application.

### Core Components

The `app/components/core/` directory contains essential reusable components:

- `AlertDialog.tsx`: For displaying alert messages or confirmations.
- `AnimatedText.tsx`: For text with animation effects.
- `ButtonIcon.tsx`: Icon buttons for various actions.
- `Buttons.tsx`: Standard button components.
- `CustomSwiper.tsx`: A custom swiper/carousel component.
- `Header.tsx`: The site header component.

To use these components in your pages or other components, import them like this:

```tsx
import AlertDialog from "@/components/core/AlertDialog";
import AnimatedText from "@/components/core/AnimatedText";
import ButtonIcon from "@/components/core/ButtonIcon";

export default function SomePage() {
  return (
    <div>
      <Header />
      <AnimatedText>Welcome to our app!</AnimatedText>
      <ButtonIcon
        icon="star"
        onClick={() => {
          /* ... */
        }}
      />
      <AlertDialog
        isOpen={/* ... */}
        onClose={/* ... */}
        // ... other props
      />
    </div>
  );
}
```

### Special Directories

- `/fonts`: Contains custom font files or font-related components.
- `/onboarding`: Components and pages related to the user onboarding process.
- `/walkthrough`: Components and pages for app walkthroughs or tutorials.

### UI Libraries and Styling

This project utilizes several modern UI libraries and styling solutions to create a robust and visually appealing user interface:

1. **Tailwind CSS**: A utility-first CSS framework that allows for rapid custom designs. It's used throughout the project for responsive and efficient styling.

   ```tsx
   // Example of Tailwind classes in a component
   <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
     <h2 className="text-xl font-bold text-gray-800">Welcome</h2>
     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
       Get Started
     </button>
   </div>
   ```

2. **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS. These components are fully accessible and customizable.

   ```tsx
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";

   function LoginForm() {
     return (
       <form>
         <Input type="email" placeholder="Email" />
         <Input type="password" placeholder="Password" />
         <Button>Log in</Button>
       </form>
     );
   }
   ```

3. **MagicUI**: Custom UI components and utilities found in the `components/magicui/` directory. These components are tailored specifically for this project's needs.

   ```tsx
   import { MagicCard } from "@/components/magicui/MagicCard";
   import { MagicButton } from "@/components/magicui/MagicButton";

   function FeatureShowcase() {
     return (
       <MagicCard>
         <h3>Amazing Feature</h3>
         <p>This feature will revolutionize your workflow.</p>
         <MagicButton>Try Now</MagicButton>
       </MagicCard>
     );
   }
   ```

### Using UI Components

When building your pages or components, you can freely mix and match components from shadcn/ui, MagicUI, and custom components, all styled with Tailwind CSS:

```tsx
import { Card } from "@/components/ui/card";
import { MagicButton } from "@/components/magicui/MagicButton";
import CustomSwiper from "@/components/core/CustomSwiper";

export default function FeaturePage() {
  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Features</h2>
        <CustomSwiper>{/* Swiper content */}</CustomSwiper>
      </Card>
      <MagicButton className="mt-4">Explore More</MagicButton>
    </div>
  );
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

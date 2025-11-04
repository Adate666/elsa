# Elsa Cosmetics Landing Page

A modern and attractive landing page for Elsa Cosmetics, showcasing their featured products and providing an engaging user experience.

## Features

- **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
- **Product Showcase:** Beautifully displayed featured and all products with detailed views.
- **Shopping Cart Functionality:** Users can add products to a cart, update quantities, and proceed to checkout.
- **Interactive UI:** Smooth scrolling, modals for product details, and toast notifications.
- **Contact Form:** A simple contact form for user inquiries.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Vite:** A fast build tool that provides an extremely fast development experience.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd elsa-cosmetics-landing-page
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode:

```bash
npm run dev
```

This will start the development server, and you can view the application in your browser, usually at `http://localhost:5173`.

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/             # Image assets
│   ├── components/         # Reusable UI components
│   ├── data/               # Product data
│   ├── sections/           # Main sections of the landing page
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   ├── index.html          # Main HTML file
│   ├── index.tsx           # Entry point for React app
│   └── types.ts            # TypeScript type definitions
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

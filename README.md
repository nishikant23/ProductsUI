# Products UI

A simple and elegant React-based product management UI where users can add, edit, view, and delete products. This project demonstrates usage of modern React (Builtin Hooks, Context API, Custom Hooks), routing with React Router, Tailwind CSS for styling, and clean UI design.

## 🔗 Live Demo

Access the live working version here:
👉 [https://products-ui.vercel.app](https://products-ui.vercel.app)

## 📁 Project Structure

```
ProductsUI
├── client
│   ├── public
|       └── products.json
│   └── src
│       ├── components
│       ├── contextAPI
│       ├── pages
|       ├── utils
│       ├── routes
│       ├── App.tsx
│       └── main.tsx
├── .gitignore
├── package.json
└── README.md
```

## ✨ Features

* Home page application overview (`/`)
* Items page listing all items (`/items`)
* Add a new item through form (`/items/new`)
* View item details (`/items/:id`)
* Edit existing item (`/items/:id/edit`)
* Delete any item
* Navigation using Sidebar Menu
* Context API for managing global state
* Custom Hook for managing Edit & Delete functionality
* Form validations and pre-filled fields when editing
* Fully responsive with Tailwind CSS

## 🚀 Getting Started

### Step-by-step guide to clone and run locally:

```bash
# Clone the repository
git clone https://github.com/nishikant23/ProductsUI.git

# Navigate into the client directory
cd ProductsUI/client

# Install dependencies
npm install

# Start the development server
npm run dev
```

### ⚙️ Build Project

```bash
npm run build
```

## 📌 Usage Instructions

### Home Page (`/`)

* App's Overview with cool image animation

### Items Page (`/items`)

* View all added items in a grid card layout
* Use `View Item`, `Edit`, and `Delete` buttons on each card

### Item Details Page (`/items/:id`)

* Displays detailed information about a selected product
* Options to Edit or Delete from here

### Create New Item (`/items/new`)

* Access via Sidebar → Create Item or direct URL
* Fill the form fields: Title, Description, Price, Image URL, Category, Rating, Reviews Count
* Submits and redirects back to `/items` with new product listed

### Edit Existing Item (`/items/:id/edit`)

* Pre-fills the form with existing data
* Allows modification and saves updates
* 
### Delete An Item (`via Button Click`)

* Able to delete from Item Card and Iteam Details page
* Gives Confirmation Box before deletion, to avoid deletes done by mistake

## 🛠 Tech Stack

* **React 18+**
* **Typescript**
* **React Router DOM**
* **Tailwind CSS**
* **Context API** (Global State Management)
* **Vite** (for fast development and build)

## 📷 UI Overview

* Responsive and elegant layout with Tailwind
* Form includes validation and number restrictions
* Clean buttons with hover and disabled state styles
* Sidebar-based navigation on smaller screens

## 💡 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

## 📃 License

This project is licensed under the MIT License.

---

Built with ❤️ by [@nishikant23](https://github.com/nishikant23)

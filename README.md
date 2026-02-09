# TasteGPT 🍳

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📝 Description

**TasteGPT** is a smart recipe discovery application that helps you find delicious recipes based on ingredients you have at home. Simply add the ingredients in your pantry, and TasteGPT uses the **Spoonacular API** to suggest recipes you can make. With a sleek dark mode toggle, responsive design, and an intuitive interface, it's your personal culinary assistant that makes meal planning effortless.

---

![Preview](https://i.postimg.cc/htZMpdNX/tastegpt.png)

---


### Key Features ✨

- 🥘 **Ingredient-Based Recipe Search** - Add your available ingredients and discover recipes you can make
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes with persistent preferences
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔍 **Recipe Details** - View comprehensive recipe information including ingredients, instructions, and images
- ⚡ **Real-time API Integration** - Powered by Spoonacular's extensive recipe database
- 🎯 **Smart Ingredient Management** - Add/remove ingredients with duplicate detection and confirmation dialogs
- 💾 **Persistent Preferences** - Your dark mode setting is saved using localStorage

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1 - Modern UI with hooks and functional components
- **Build Tool**: Vite 7.1.0 - Lightning-fast build and development server
- **Styling**: CSS3 - Clean, responsive styling with dark mode support
- **API**: Spoonacular API - Comprehensive recipe and ingredient database
- **Code Quality**: ESLint 9.32.0 - Code linting and quality assurance
- **State Management**: React Hooks (useState, useEffect) - Built-in state management

## 📦 Dependencies

### Production
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```

### Development
- `@vitejs/plugin-react` - React Fast Refresh support
- `eslint` & plugins - Code linting
- `@types/react` & `@types/react-dom` - TypeScript types
- `globals` - Global variables in ESLint

## 📁 Project Structure

```
taste-gpt/
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── src/
    ├── index.jsx           # React app entry point
    ├── App.jsx             # Main app component with dark mode logic
    ├── Header.jsx          # Header with logo and dark mode toggle
    ├── MainContent.jsx     # Ingredient management and display
    ├── Recipe.jsx          # Recipe fetching and display (Spoonacular API)
    ├── Footer.jsx          # Footer component
    ├── style.css           # Global styles with dark mode support
    ├── image.png           # TasteGPT logo
    └── favicon.ico         # Browser tab icon
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd taste-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```
   VITE_SPOONACULAR_API_KEY=your_api_key_here
   ```
   Get a free API key from [Spoonacular](https://spoonacular.com/food-api)

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (generates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Component Architecture

### App.jsx
- Root component managing dark mode state
- Persists dark mode preference to localStorage
- Composes Header, MainContent, and Footer

### Header.jsx
- Displays TasteGPT logo and title
- Dark mode toggle button (☀️/🌙)
- Receives `darkMode` state and toggle handler from App

### MainContent.jsx
- Ingredient input form
- Manages list of added ingredients
- Prevents duplicate ingredients
- Handles ingredient removal with confirmation
- Passes ingredients to Recipe component

### Recipe.jsx
- Fetches recipes from Spoonacular API based on ingredients
- Shows loading state while fetching
- Displays recipe details (title, image, ingredients, instructions)
- Error handling for API failures
- Only shows "Get Recipe" button when 2+ ingredients are present

### Footer.jsx
- App footer component

### style.css
- Global styling
- Dark mode styles with `.dark` class
- Responsive design for mobile and desktop
- Component-specific styles

## 🔌 API Integration

The app uses the **Spoonacular API** with two main endpoints:

1. **Find Recipes by Ingredients**
   ```
   /recipes/findByIngredients?ingredients=...&number=1
   ```
   - Searches for recipes based on provided ingredients

2. **Recipe Information**
   ```
   /recipes/{id}/information
   ```
   - Retrieves detailed recipe information including instructions and images

## 🎯 How to Use

1. **Add Ingredients**: Enter an ingredient name (e.g., "oregano") in the input field and click "Add ingredient"
2. **Build Your List**: Keep adding ingredients from your pantry
3. **Get Recipe**: Once you have 2+ ingredients, click "Get a recipe" button
4. **View Recipe**: Browse the returned recipe with full details
5. **Toggle Theme**: Use the ☀️/🌙 button to switch between light and dark modes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SPOONACULAR_API_KEY=your_spoonacular_api_key
```

Access in code via: `import.meta.env.VITE_SPOONACULAR_API_KEY`

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| API calls fail | Verify your Spoonacular API key is correct and has available quota |
| Dark mode doesn't persist | Check browser localStorage settings |
| Styles not loading | Clear browser cache and run `npm run dev` again |
| Build errors | Delete `node_modules/` and `.node_modules.bin/`, then run `npm install` |

## 🚀 Future Enhancements

- Save favorite recipes to a wishlist
- Filter recipes by cuisine type or dietary restrictions
- Share recipes with friends
- User authentication and recipe ratings
- Advanced search filters
- Recipe serving size calculator

## 👨‍💻 Development Tips

- Use React Developer Tools extension for debugging
- Check Spoonacular API documentation for available endpoints
- Leverage Vite's fast HMR for rapid development iteration
- Run `npm run lint` before committing code

---

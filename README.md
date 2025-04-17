# React CV Portfolio

This project is a modern, interactive CV built with React, TypeScript, and Vite. It showcases professional experience, skills, projects, and more in a visually appealing and responsive design. The application includes advanced features such as theme and language togglers, PDF download functionality, custom image carousels, and animations.

## Features

### Core Features

- **Theme Toggler**: Switch between light and dark themes seamlessly.
- **Language Toggler**: Supports multiple languages (e.g., English, Spanish, German) with translations for all sections.
- **PDF Download**: Download the CV as a PDF directly from the interface.
- **Custom Image Carousels**: Interactive carousels for showcasing project images using `embla-carousel-react` and `react-photo-view`.
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices.

### Styling and Animations

- **CSS Styling**: Custom styles using CSS modules and global variables for consistent theming.
- **Framer Motion Animations**: Smooth animations for transitions and interactions.
- **Hover Effects**: Interactive hover effects for buttons, icons, and links.

### State Management

- **Zustand**: Lightweight state management for theme and language toggling.

### Project Highlights

- **Portfolio Section**: Displays projects with descriptions, features, technologies, and image galleries.
- **Skills Section**: Lists skills with levels, experience, and associated projects.
- **Experience Section**: Highlights professional experience with roles, tasks, and company details.
- **Languages Section**: Showcases language proficiency with visual indicators.

## Technologies Used

- **React**: Component-based UI development.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast build tool for modern web projects.
- **Zustand**: State management for theme and language toggling.
- **Framer Motion**: Animations and transitions.
- **Embla Carousel**: Customizable image carousels.
- **CSS and TailwindCSS**: Styling and responsive design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asrlex/react-cv.git
   cd react-cv
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run deploy`: Deploy the project to GitHub Pages.
- `npm run lint`: Run ESLint to check for code quality issues.

## Project Structure

``` plaintext
src/
├── components/         # React components (e.g., AboutMe, Skills, Portfolio)
├── store/              # Zustand stores for theme and language
├── style/              # CSS styles and global variables
├── translations/       # Language translations for multilingual support
├── assets/             # Static assets like images and icons
├── App.tsx             # Main application component
├── main.tsx            # Entry point for the React app
```

## Deployment

This project is deployed on GitHub Pages. To deploy:

1. Run `npm run build` to generate the production build.
2. Run `npm run deploy` to publish the `dist` folder to GitHub Pages.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Embla Carousel](https://www.embla-carousel.com/) for the custom carousels.
- [React Photo View](https://react-photo-view.vercel.app/en-US) for the image viewer.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Zustand](https://zustand-demo.pmnd.rs/) for state management.
- [React Icons](https://react-icons.github.io/react-icons/) for icons.

# Gridiron Playbook Pro

An interactive playbook application designed for offensive line coaches and players. Gridiron Playbook Pro centralizes run plays, pass protection schemes, and team standards; integrates film study; and allows adding custom plays in real time.

## Features

- **Dashboard**: Quick access to Run Plays and Pass Protection sections with a branded logo.
- **Run Plays**: View built-in plays (Falcons, Zone, Power, Pin & Pull), add your own with diagram URLs, and navigate to detailed breakdowns.
- **Pass Protection**: Explore Black (Slide Left) and Purple (Slide Right) protections, each with embedded PDF installation sheets.
- **Film Study**: Embedded YouTube videos covering zone blocking execution, pass protection techniques, and run play strategies.
- **Standards**: Stylish card-based display of non-negotiable team rules and best practices.
- **Play Detail**: Detailed view for each play with diagrams, rules, personal notes, and an embedded PDF viewer.
- **Theme Toggle**: Switch between light and dark modes for comfortable viewing.
- **Responsive UI**: Fully responsive grid layouts, animated navigation, and clean styling.

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd coach-hub
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser. The app reloads on code changes.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `build` folder. Deploy the contents of `build` to your hosting service (e.g., Netlify).

## Project Structure

```
src/
  components/    # Reusable UI components (RunPlays, Header, Standards, etc.)
  App.js         # Main application entry with route definitions
  index.js       # App bootstrap and ReactDOM render
  styles/        # Global and component styles
public/          # Static assets and entry HTML
```

## Customization

- **Add New Play**: Use the “Add New Play” form on the Playbook tab to insert custom plays.
- **Standards**: Edit `src/components/Standards.js` to update team rules.
- **Film Study**: Replace or add YouTube URLs in `src/components/RecentPlays.js`.

## Deployment

This project includes a `netlify.toml` configuration for Netlify:

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## License

This project is open source. Feel free to customize and extend!

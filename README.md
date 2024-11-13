# Binary Polling App

This is a simple **Binary Polling App** built with **React** and **TypeScript**. Users can vote between two options until only one choice remains. Each round, the selected option moves to the next round, while the eliminated option is removed. The app dynamically generates polls based on a list of choices and declares a winner when only one option is left.

## Features

- **Dynamic Poll Generation**: Choices are dynamically paired for voting.
- **Progressive Binary Polling**: Selected options advance, while eliminated options are removed.
- **Winner Display**: The final remaining choice is displayed as the winner.
- **Modular Components**: Built with reusable, modular components in TypeScript.

## Screenshots

![Poll Screen](./screenshots/poll-screen.png)
![Winner Screen](./screenshots/winner-screen.png)

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and improved code readability.
- **CSS Modules**: For component-level styling.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed globally on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/binary-polling-app.git
   cd binary-polling-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

The project is structured as follows:

```
.
├── public                # Public static files
├── src
│   ├── components
│   │   ├── Poll.tsx      # Poll component for voting
│   │   └── Winner.tsx    # Winner display component
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point for React
│   └── styles            # CSS files for styling
└── package.json          # Project metadata and dependencies
```

## Deployment

### Deploying to Vercel

To deploy the app on Vercel, follow these steps:

1. Commit your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), log in or create an account.
3. Connect your GitHub account and import your project.
4. Follow the instructions on Vercel to configure and deploy.

The application will be available at `https://your-app-name.vercel.app` after a successful deployment.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.

## License

This project is open-source and available under the [MIT License](./LICENSE).

---

Feel free to reach out if you have any questions or run into issues. Happy coding!

# Digital Creativity

A modern web application built with Angular and enhanced with Tailwind CSS for styling. This project implements Server-Side Rendering (SSR) for improved performance and SEO.

## 🚀 Features

- **Angular Framework**: Built with Angular 19.1.2
- **Tailwind CSS**: Modern utility-first CSS framework for styling
- **Server-Side Rendering**: Enhanced performance and SEO capabilities
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## 📦 Installation

1. Clone the repository:
```bash
git clone [https://github.com/AbdelrhmanRafat/George]
cd DigtalCreativty
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

### Production Build
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Server-Side Rendering
```bash
ng run DigtalCreativty:serve-ssr
```
This will start the SSR version of your application.

## 🏗️ Project Structure

```
DigtalCreativty/
├── src/                    # Source files
│   ├── app/               # Application components
│   ├── assets/            # Static assets
│   └── styles/            # Global styles
├── angular.json           # Angular configuration
├── package.json           # Project dependencies
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration is managed through:
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration for processing CSS

## 🔧 Configuration Files

- `angular.json`: Main Angular configuration file
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript compiler options
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration

## 📝 Available Scripts

- `ng serve`: Start development server
- `ng build`: Build the project
- `ng test`: Run unit tests
- `ng e2e`: Run end-to-end tests
- `ng run DigtalCreativty:serve-ssr`: Start SSR server


## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Angular SSR Guide](https://angular.dev/guide/ssr)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

#!/bin/bash

# Juris Source Website Setup Script
# This script will install dependencies and set up the development environment

echo "🚀 Setting up Juris Source Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run TypeScript check
echo "🔧 Running TypeScript check..."
npx tsc --noEmit

# Build the project
echo "🏗️ Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo "   • Run 'npm run dev' to start development server"
    echo "   • Run 'npm run build' to build for production"
    echo "   • Run 'npm run start' to start production server"
    echo "   • Run 'npm run export' to generate static files"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
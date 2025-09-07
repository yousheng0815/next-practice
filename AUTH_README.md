# 🎨 Beautiful Authentication System

This project implements a stunning, modern login and signup flow using Supabase authentication with a gorgeous UI design.

## ✨ Features

- **🔐 Secure Authentication**: Enterprise-grade security with Supabase
- **👤 User Registration**: Beautiful signup forms with validation
- **🔑 User Login**: Smooth sign-in experience with error handling
- **💾 Session Management**: Automatic session handling with persistent login state
- **🛡️ Protected Routes**: Authentication state available throughout the app
- **📱 Responsive Design**: Mobile-first, responsive interface
- **🌙 Dark Mode**: Automatic dark/light mode support
- **✨ Modern UI**: Glass morphism, gradients, and smooth animations
- **🎯 User Experience**: Intuitive, accessible, and delightful interactions

## File Structure

```
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── contexts/
│   └── AuthContext.tsx          # Authentication context provider
├── components/
│   ├── LoginForm.tsx            # Login form component
│   └── SignupForm.tsx           # Signup form component
├── app/
│   ├── auth/
│   │   └── page.tsx             # Authentication page with tabs
│   ├── layout.tsx               # Root layout with AuthProvider
│   └── page.tsx                 # Home page with auth status
└── .env.local                   # Environment variables
```

## 🚀 Usage

1. **Environment Setup**: The Supabase configuration is stored in `.env.local`
2. **Authentication Context**: Use the `useAuth()` hook to access auth state and methods
3. **Login/Signup**: Navigate to `/auth` to access the beautiful authentication forms
4. **Session Management**: Authentication state is automatically managed and persisted
5. **Modern UI**: Enjoy the stunning glass morphism design with smooth animations

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple-to-blue gradients
- **Glass Morphism**: Frosted glass effect cards with backdrop blur
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **Icon Integration**: SVG icons throughout the interface
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Dark Mode**: Automatic theme switching based on system preference
- **Loading States**: Elegant loading spinners and skeleton screens

## Available Auth Methods

- `signUp(email, password)` - Create a new user account
- `signIn(email, password)` - Sign in with existing credentials
- `signOut()` - Sign out the current user
- `user` - Current user object (null if not authenticated)
- `session` - Current session object
- `loading` - Loading state for auth operations

## Supabase Configuration

The app is configured to use your Supabase project:

- **URL**: https://xnyjdybforltylqjtgfc.supabase.co
- **API Key**: Configured in environment variables

## Getting Started

1. Make sure your Supabase project has authentication enabled
2. Run `npm run dev` to start the development server
3. Navigate to `http://localhost:3000` to see the home page
4. Click "Sign In / Sign Up" to access the authentication forms
5. Create an account or sign in with existing credentials

## Security Notes

- The anonymous key is safe to use in the browser with proper RLS policies
- User sessions are automatically managed by Supabase
- Password validation is handled on both client and server side
- Email confirmation is required for new accounts (configurable in Supabase dashboard)

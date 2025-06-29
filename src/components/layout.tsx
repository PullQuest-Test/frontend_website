import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthProvider } from '@/contexts/AuthContext';
import { NotificationProvider } from '@/contexts/NotificationContext';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PullQuest - Code Review Platform',
    template: '%s | PullQuest'
  },
  description: 'Professional code review and collaboration platform for developers',
  keywords: ['code review', 'pull requests', 'collaboration', 'git', 'development'],
  authors: [{ name: 'PullQuest Team' }],
  creator: 'PullQuest',
  publisher: 'PullQuest Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pullquest.dev',
    title: 'PullQuest - Code Review Platform',
    description: 'Professional code review and collaboration platform for developers',
    siteName: 'PullQuest',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PullQuest Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PullQuest - Code Review Platform',
    description: 'Professional code review and collaboration platform for developers',
    images: ['/twitter-image.png'],
    creator: '@pullquest'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google-site-verification-token',
    yandex: 'yandex-verification-token'
  }
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <NotificationProvider>
              <div className="relative flex min-h-screen flex-col">
                {/* Skip to main content for accessibility */}
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
                >
                  Skip to main content
                </a>

                {/* Navigation Header */}
                <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <Navigation />
                </header>

                {/* Main Content Area */}
                <main id="main-content" className="flex-1">
                  <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>

                {/* Breadcrumb Navigation */}
                <nav aria-label="Breadcrumb" className="border-t bg-muted/30">
                  <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
                    <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <li>
                        <a href="/" className="hover:text-foreground transition-colors">
                          Home
                        </a>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 mx-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-foreground">Current Page</span>
                      </li>
                    </ol>
                  </div>
                </nav>

                {/* Footer */}
                <footer className="border-t bg-muted/50">
                  <Footer />
                </footer>

                {/* Back to Top Button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 opacity-0 pointer-events-none data-[visible=true]:opacity-100 data-[visible=true]:pointer-events-auto"
                  aria-label="Back to top"
                  data-visible={typeof window !== 'undefined' && window.scrollY > 300}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>

              {/* Loading Spinner Overlay */}
              <div
                id="loading-overlay"
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  <p className="text-sm text-muted-foreground">Loading...</p>
                </div>
              </div>

              {/* Global Toast Container */}
              <div
                id="toast-container"
                className="fixed bottom-4 left-4 z-50 space-y-2"
                aria-live="polite"
              ></div>

              {/* Keyboard Navigation Helper */}
              <div className="sr-only" aria-live="polite" id="keyboard-navigation-help">
                Use Tab to navigate through interactive elements, Enter to activate, and Escape to close dialogs.
              </div>
            </NotificationProvider>
          </AuthProvider>
        </ThemeProvider>

        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic analytics initialization
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              }
            `
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => console.log('SW registered'))
                    .catch(error => console.log('SW registration failed'));
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}

// Export additional metadata for dynamic routes
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `${params.slug} | PullQuest`,
    description: `View ${params.slug} on PullQuest platform`
  };
}

// Static exports for build optimization
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour
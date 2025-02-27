import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <SignedIn>
                <Link href="/dashboard" className="flex items-center">
                  <span className="ml-2 font-semibold text-gray-900 flex items-center">
                    <span className="text-2xl transform scale-y-75">S</span>
                    <span className="text-xl">hortest</span>
                  </span>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href="/" className="flex items-center">
                  <span className="ml-2 font-semibold text-gray-900 flex items-center">
                    <span className="text-2xl transform scale-y-75">S</span>
                    <span className="text-xl">hortest</span>
                  </span>
                </Link>
              </SignedOut>
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <Link href="/pricing">Pricing</Link>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard/settings">Settings</Link>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

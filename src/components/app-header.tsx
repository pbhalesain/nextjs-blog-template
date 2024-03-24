
import { auth, signOut } from "@/auth";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteContent } from "@/config/site-content";
import Image from "next/image";
import Link from "next/link";
function SignOut() {
  return (
    <form action={async () => {
      'use server';
      await signOut();
    }}><Button type="submit">Sign Out</Button>

    </form>
  );
}
export async function AppHeader() {
  const session = await auth();
  console.log(session);
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteContent.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {
            session ?.user ? (
              <div className="flex items-center gap-4"> {session.user.name && session.user.image && 
              <Image src={session.user.image} alt={session.user.name} width={32} height={32} className="rounded-r-full"/>}<SignOut/></div>
            ) : (
              <Link
                href="/api/auth/signin"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Sign In
              </Link>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Product from "./products/page";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
       <ClerkProvider>
           <SignedOut>
            <SignInButton mode="modal">
              <h1 className="text-red-500 cursor-pointer">Login/Register</h1>
            </SignInButton >
          </SignedOut >
          <SignedIn >
            <UserButton />
          </SignedIn> 
           </ClerkProvider>
      <Product/>
    </div>
  );
}

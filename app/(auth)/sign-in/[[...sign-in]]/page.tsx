import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Page() {
  if (!!auth().userId) {
    console.log("first");
    return redirect("/app");
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SignIn signUpFallbackRedirectUrl={"/app/"} fallbackRedirectUrl="/app" />
    </div>
  );
}

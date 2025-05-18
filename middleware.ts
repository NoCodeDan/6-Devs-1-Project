import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher for public routes
const publicRoutes = createRouteMatcher([
  "/",
  "/pricing",
  "/api/webhook(.*)",
]);

export default clerkMiddleware({
  publicRoutes,
  ignoredRoutes: ["/api/webhook(.*)"],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}; 
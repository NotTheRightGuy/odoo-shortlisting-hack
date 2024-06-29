export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "police" | "user";
    };
    onBoardingDone?: "true" | "false";
  }
}

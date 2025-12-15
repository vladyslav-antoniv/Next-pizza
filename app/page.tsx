import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Next Pizza!</h1>
      <Button variant="outline" size="lg">
        Order Now
      </Button>
    </main>
  );
}
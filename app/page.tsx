  // import SampleForm from "@/components/example-form";
  import ComplexForm from "@/components/complex-form";
  export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      <p className="text-lg">This is a sample Next.js application and here I'm exploring shadcn form components with ZOD validation.</p>
      {/* <SampleForm /> */}
      <ComplexForm />
    </main>
  )
}
       
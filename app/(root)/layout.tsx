import Header from "@/components/Header"

const SecondRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      {/* header */}
      <Header />
      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default SecondRoot 

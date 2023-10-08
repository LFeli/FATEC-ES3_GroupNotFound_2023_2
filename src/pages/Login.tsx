import { Button } from "@/components/ui/button";

export function Login() {
  return (
    <>
      <header>
        <Button variant={"ghost"} className="absolute z-10 right-8 top-8 hover:bg-transparent  px-6 py-8">
          <a href="#" className="">
            <img src="logo.svg" alt="" />
          </a>
        </Button>
      </header>


        {/* Grid box */}
      <div className="grid grid-cols-2 h-screen w-full bg-[#F2F2F2]">
      
        {/* left side */}
        <div>
          <main>

          </main>

          <footer className='flex items-center justify-center'>
            <span className='text-sm absolute bottom-4'>Oh my dog 2023</span>
          </footer>
        </div>

        {/* Right side */}
        <div>
          <img src="src/assets/animals/login.jpg" alt="" className="h-screen w-full object-cover"/>
        </div>
      </div>
    </>
  )
}
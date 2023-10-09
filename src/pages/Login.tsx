import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export function Login() {
  const[output, setOutput] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(JSON.stringify(values, null, 2))
  }

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </form>
            </Form>

            <pre>{output}</pre>
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
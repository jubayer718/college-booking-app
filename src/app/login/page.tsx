/* eslint-disable @typescript-eslint/no-unused-vars */


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {FaGoogle, FaTwitter} from "react-icons/fa6"
import { signIn } from "@/auth";
import LoginForm from '@/components/layout/login/LoginForm';



export default function LoginPage() {
 
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 my-12">
      <div className="bg-amber-100 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Login to Your Account</h1>
         
        <LoginForm />
    
        <hr className='my-2'/>
        <div className='flex items-center gap-2'>
           <form
          action={
            async () => {
              "use server"
              await signIn("google")
            }
        }
        >
           <Button
          type="submit"
          className=" text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          <FaGoogle size={24}/>Continue with Google
        </Button>
        </form>
        
         <form
          action={
            async () => {
              "use server"
              await signIn("twitter")
            }
        }
        >
           <Button
          type="submit"
          className=" text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          <FaTwitter size={24}/>Continue with Twitter
        </Button>
       </form>
       </div>
      </div>
    </div>
  );
}

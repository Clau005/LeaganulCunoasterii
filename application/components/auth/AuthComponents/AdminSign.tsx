import { AdminLoginForm } from "@/components/auth/images/AdminFormEmailAndPassword"
import { GoogleSignIn } from "@/components/auth/images/GoogleSignIn"
import { SecureLoginAdminImage } from "@/components/auth/images/ImageAuthComponents/SecureLoginAdmin"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { useSupabase } from "@/providers/SupabaseProvider"




export const AdminSignIn = () => {

    const {supabase, session} = useSupabase()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });

        if (loginError) {
          alert(loginError);
        } 
      };

    const handleGoogleSignIn = async () => {
        const {error:googleSignInError} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options : {
              redirectTo: 'http://localhost:3000/admin'
            }
        })
        if (googleSignInError) {
            alert(googleSignInError.message)
        }
        
    }
    if(session ) {
      redirect('/admin')
    }

    return (

    <div className="flex h-screen">
      <div className="w-1/2 relative"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
            <div className="flex flex-row w-[65%] h-[75%] ">
                <div  className="flex w-full h-full items-center justify-center border-white" id='div2'>
                   <SecureLoginAdminImage />
                </div>
                <div className="flex  w-[60%] h-full items-center justify-center space-y-12 rounded-xl ">
                    <div className=" flex flex-col  items-center justify-center space-y-8 bg-[#f9f7f7] shadow-lg w-full h-[70%] rounded-xl ">
                    <h1 className="text-2xl font-semibold">Admin Sign in!</h1>
                    <div className="flex w-2/3 items-center justify-center">
                        <button type="submit" onClick={handleGoogleSignIn} className="w-full rounded-sm border text-white">
                            <GoogleSignIn />
                        </button>
                    </div>
                    <div className="flex items-center gap-6 my-3">
                        <hr className="flex-grow border-black border-1"/>
                        <span className="text-alpha-highlight"> or </span>
                        <hr className="flex-grow border-black border-1"/>
                    </div>
                    <div className="w-2/3">
                    <div className="w-full space-y-12">
      <div className="flex flex-col space-y-4 items-center">
        <input
          type="email"
          value={email}
          className="w-full border rounded-xl px-8 py-4 text-xl shadow-md outline-none"
          placeholder="Email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          className="w-full border rounded-xl px-8 py-4 text-xl shadow-md outline-none"
          placeholder="Password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleLogin}
          type="submit"
          className="w-full bg-[#6b63ff] px-8 py-4 text-2xl font-semibold text-white rounded-xl shadow-xl hover:bg-purple-700 transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
    
                    </div>
                    </div>
                </div>
            </div>  
        </div>
      <div className="w-1/2">
      
      </div>
    </div>
      

    )
}


// #6b63ff
//#6b63ff



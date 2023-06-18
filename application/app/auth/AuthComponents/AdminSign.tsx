
import { useSupabase } from "@/supabase-function/components/SupabaseProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";



export const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {supabase} = useSupabase('public')
    const [message] = useState('');
    const router = useRouter();
  
    const handleLogin = async () => {
      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError) {
        alert(loginError);
      } else {
        router.push('/admin/');
      }
    };


    return (
        <div>
            <h1>Admin LogIn!</h1>

            <input type="email" value={email}  className='border' onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}/>
              <input type="password" value={password} className='border' onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}/>
              <button onClick={handleLogin} type='submit'>
                SignIn
              </button>
        </div>
    )
}
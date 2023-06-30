
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { session } = useSessionContext();
  const supabase = useSupabaseClient();
  const [message] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      alert(loginError);
    } else {
      router.push('/admin');
    }
  };

    return (
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
    
    )
}
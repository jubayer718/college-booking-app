'use client'
import { googleSignIn } from '@/action/oAuth/Google';
import { twitterSignIn } from '@/action/oAuth/Twitter';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa6';

const AuthLogin = () => {
  return (
    <div className=' flex items-center gap-2'>
    
     <form
      action={googleSignIn}
      
    >
      <Button type='submit'><FaGoogle/> Continue with Google</Button>
      </form>
      

    <form
      action={twitterSignIn}
      
    >
      <Button type='submit'><FaGoogle/> Continue with Twitter</Button>
    </form>
    </div>
  );
};

export default AuthLogin;
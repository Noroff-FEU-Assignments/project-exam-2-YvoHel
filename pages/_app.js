import '../styles/globals.scss'
import { useEffect } from 'react';
import { AuthProvider } from '../context/AuthContext';



function MyApp({ Component, pageProps }) {
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

return(
<AuthProvider>
<Component {...pageProps} />
</AuthProvider>
)
  
}

export default MyApp

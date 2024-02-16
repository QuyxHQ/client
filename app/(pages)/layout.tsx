import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Props ={
    children : React.ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <>
   <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout 
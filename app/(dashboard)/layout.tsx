import Header from "@/components/Layout/Dashboard_header";

type Props ={
    children : React.ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <>
   <Header />
    {children}
    </>
  )
}

export default Layout 
import Header from "./Header";
export default function Layout({ children }) {
  return(
    <div className="mt-[4rem]">
    <Header/>
    {children}
    </div>
    
     
  )
}

import NavBar from "@/component/navbar"
import Header from "@/component/Header"
export default function Page({ params, searchParams }) {
    return (
        <div>
            <div>
            <NavBar/>
            </div>
            <Header/>
        </div>
    )
  }
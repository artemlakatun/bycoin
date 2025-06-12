import GreetingPage from "@/app/pages/greeting_page/page";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
      <>
        <Header />
        <GreetingPage/>
        <Footer />
      </>
  )
}

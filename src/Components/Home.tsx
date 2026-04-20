import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

export const Home = () => {
  return (
    <><Header />
      <div className="page__line"></div>
      <Main />
      <div className="page__line"></div>
      <Footer /></>
  )
}
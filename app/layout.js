import { Inter } from 'next/font/google'
import Link from "next/link";
import all from '../app/css/all.css'
import style from './style.scss';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="container container_top" >
          <h1>Shopping</h1>
        
          <div id="input_top">
            <Link href="/cart">
              <div className='cart'>
                <svg viewBox="0 0 512.002 512.002" className="header_cartIcon__286Ri">
                  <path d="M194.59 382.711c-35.646 0-64.646 29-64.646 64.646s29 64.646 64.646 64.646 64.646-29 64.646-64.646-29.001-64.646-64.646-64.646zm0 90.504c-14.261 0-25.858-11.597-25.858-25.858 0-14.261 11.597-25.858 25.858-25.858 14.254 0 25.858 11.597 25.858 25.858 0 14.26-11.597 25.858-25.858 25.858zM385.941 382.711c-35.646 0-64.646 29-64.646 64.646s29 64.646 64.646 64.646 64.646-29 64.646-64.646-29-64.646-64.646-64.646zm0 90.504c-14.261 0-25.858-11.597-25.858-25.858 0-14.261 11.597-25.858 25.858-25.858 14.261 0 25.858 11.597 25.858 25.858 0 14.26-11.597 25.858-25.858 25.858zM498.088 126.274a19.4 19.4 0 00-15.179-7.324H143.326l-17.629-89.095a19.392 19.392 0 00-15.528-15.308L32.594.325C22.038-1.621 11.953 5.368 10.02 15.905s5.042 20.641 15.58 22.574l64.607 11.843 56.914 287.667c1.797 9.083 9.768 15.631 19.025 15.631h271.512c9.031 0 16.86-6.225 18.896-15.037l45.252-195.876a19.38 19.38 0 00-3.718-16.433zm-75.855 188.559H182.074l-31.075-157.089h307.519l-36.285 157.089z"></path>
                </svg>
                <h2>Cart</h2>
              </div>
            </Link>
            <div className="hamburger">
            <input type="checkbox" name="select" id="select"></input>
            <div className="select">
                <label htmlFor="select"><span>Hello <i className="fas fa-angle-down"></i></span></label>
                <div className="select__inner">
                    <div className="select__item">My Account</div>
                    <div className="select__item">My Order</div>
                    <div className="select__item">Favorites</div>
                    <div className="select__item">Logout</div>
                </div>
            </div>
            <input type="checkbox" name="select" id="menu__toggle"></input>
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <div className="hamburger-menu">
              <div className="menu__box">
                <a className="menu__box_text" href="#">My Acount</a>
                <a className="menu__box_text" href="#">My Order</a>
                <a className="menu__box_text" href="#">Favorites</a>
                <a className="menu__box_text" href="#">Logout</a>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="container bottom_block">
          <div className='explore'>
            <h1>Explore</h1>
            <div className="container_links">
              <div className="link">
                <Link href="/" className='links'>New In</Link>
                <Link href="/clothing" className='links'>Clothing</Link>
                <Link href="/shoes" className='links'>Shoes</Link>
                <Link href="/phones" className='links'>Phones</Link>
                <Link href="/books" className='links'>Books</Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}

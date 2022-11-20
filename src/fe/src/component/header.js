import { createContext, useEffect, useState } from 'react';
import './header.css';
import { Slideshow, SlideshowItem } from './header-slideshow';
import { NavLink } from 'react-router-dom';
import Navbar from './nav_bar';
function Header({ props }) {
  const [fixed, setFixed] = useState({ position: '', zIndex: '' });

  const display = ['Uy tin', 'Chat luong', 'Giao hang nhanh'];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState({ top: 'unset' });
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(scrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="header-wrap" style={fixed}>
      <div className="header">
        <div className="header-slide">
          <Slideshow>
            <SlideshowItem>
              <a className="display-a">{display[0]}</a>
            </SlideshowItem>
            <SlideshowItem>
              <a className="display-a">{display[1]}</a>
            </SlideshowItem>
          </Slideshow>
        </div>
        <div className="header-preview">
          <div className="header-logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADIklEQVRoge2ZPU9UQRSGH00EEVnXUrAhET8IkUJL0cICIiQof0ArNYqWJkq0gUT8D/4CLYkWGqQRwYiICVEUtBCNNiaERQqCYjHnymXYuTsfu+zG3Dc5uTszZ95z3jsfd+5eSJEiRQqgCxgGloC1MllOcuj0FTFQxuRN1u8qoqsCkjaZ08g8q4CETTacL+FtBiE5YLeL8i1EDsjoldsNzkkiJoFG4AgwFJ7XPwwJZ6PEMKHOhTRpaNs13xvAaoE+SbYqHHG0F+jjJeQT0AQcBkbIM6zAGWDBQ8SC9NWRQa3TQ8BB4HOokN/AMcs+TcAbBxGT0scGx4E/BAh54NIJ2AncAZYxC1gGbgPVjtwPCRDS7Bgswj7gFjAO/BQbB25Kmw+aCRCioxq4JkktiY0BvUCVR3KufEUR0gBMkTzn6x1i+PAFC6mOBX0PdKP28zrgLDAjba+xGxlfvmAh12NBs3n8s7HgVy34ffmChbyUcnes7hIwD3RIuUd8xiz4ffmCheSkHD8eZKXui5QzUl604PflCxail2uBPgs/W35bPiO/6fS7prWbyjqP7meCL5+R33T61ZGTazQVvsba5uW6R/PdSj5rIe/kelquFyXgvPyOt02Xgc8IfS72SnkG83b5QXyuWPD78gUv9irUkzYKfg61q2RQ22QUdALYYcHvy+ct5FSsrj4WPJ9NsH4g3A8MoqbFL7Fp4C7qaOLKh+TiLeQjG4e+CvWkfYFahDlgFDX80Z3rQe39pgQXxceWD2AvMBsiZA14zvoOUggdwIr0ewS0AbvETgKPpW2Fza/MJmRR4uI5WUO/i7PACYt+b8V/MMHnnvhMWfC1AXN58rGGaVo8Ac4DB4Aa1Ei1ApfZeNdaErhbYn6j0veocNUI9wXgaUIewUJs7QfqyNGK2okiwX3A9yLwb0KhI0qlwvuI4oMR1PxeFpuTupKglEK+of7uqRVrkrotRegcjuw+6gHYIL+LxbsJ6RqpNJiEWL0DlAl5X6VNQl6VMJFQTLg4d1K8hVlsc/4o2l8BSevm/DE0Qifqm1309005LPjzdIoUKf4j/AXd4sS6zIicTwAAAABJRU5ErkJggg=="></img>
            <NavLink to={'/'}>MyShop</NavLink>
          </div>
          <div className="header-quickly-buy">
            <NavLink to="">Buy now</NavLink>
          </div>
        </div>
      </div>
      <Navbar props={props} />
    </div>
  );
}
export default Header;

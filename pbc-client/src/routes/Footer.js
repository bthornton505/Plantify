import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return(

    <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
      <small class="f6 db tc">© 2019 <b class="ttu">Plantify Inc</b>., All Rights Reserved</small>
      <div class="tc mt3">
        <Link to="/about" class="f6 dib ph2 link mid-gray dim">About</Link>
        <a href="/Github" class="f6 dib ph2 link mid-gray dim">Github</a>
        <a href="/contact" class="f6 dib ph2 link mid-gray dim">Contact</a>
      </div>
    </footer>

  )
}

export default Footer;

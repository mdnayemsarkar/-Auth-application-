import "./Fpge.css"
import { NavLink } from "react-router-dom";
function app(){
  return(
   <body>
     <header>
      <nav id="menu">
        <ul>
          <li><NavLink to="./">Home</NavLink></li>
          <li><a href="">About Us</a></li>
          <li><NavLink to="">Contact Us</NavLink></li>
        </ul>
      </nav>
      <div id="logo">
        <a href="">Nayem Sarkar</a>
      </div>
      <nav id="social-link">
        <ul>
          <li><a href="">fb</a></li>
          <li><a href="">google</a></li>
          <li><a href="">twiter</a></li>
        </ul>
      </nav>
    </header>
    <div id="main">
      <aside class="sbbr">
        <ul>
          <li><a href=""></a>Front page</li>
          <li><NavLink to="">Create a new account</NavLink></li>
          <li><NavLink to="">Deshboard</NavLink></li>
          <li><a href=""></a>log in</li>
          <li><a href=""></a>About us</li>
        </ul>

      </aside>
      <article class="">
        <h2>Wecome to our website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium, aliquid id laudantium eius tenetur facere sed doloremque autem expedita quisquam cum suscipit, ullam, in vitae voluptas temporibus. Sit suscipit dolorum recusandae perferendis, officia nihil, provident deleniti, dolore officiis numquam quidem. Unde, sed nobis. Nobis vel provident quae sint asperiores!</p>
        <h2>Our services</h2>
        <div className="srvc-cntnr">
          <div className="srvc-bx">

          <div className="srvc-img">
            <img src="" alt="" />
          </div>
          <div className="srvc-ttl">
<h3>Web desigining</h3>

          </div>
          <div className="srvc-dscrptn">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo provident doloremque iure quod, consequatur atque eligendi placeat eaque illum nemo voluptatum corporis harum. Fuga suscipit recusandae provident consequuntur vero.

            </p>
          </div>
          <div className="cl-to-actn">
            <a href="">Read more</a>
          </div>
        </div>
        <div className="srvc-bx">

          <div className="srvc-img">
            <img src="" alt="" />
          </div>
          <div className="srvc-ttl">
<h3>Web development</h3>

          </div>
          <div className="srvc-dscrptn">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo provident doloremque iure quod, consequatur atque eligendi placeat eaque illum nemo voluptatum corporis harum. Fuga suscipit recusandae provident consequuntur vero.

            </p>
          </div>
          <div className="cl-to-actn">
            <a href="">Read more</a>
          </div>
        </div>
        <div className="srvc-bx">

          <div className="srvc-img">
            <img src="" alt="" />
          </div>
          <div className="srvc-ttl">
<h3>mobile development</h3>

          </div>
          <div className="srvc-dscrptn">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo provident doloremque iure quod, consequatur atque eligendi placeat eaque illum nemo voluptatum corporis harum. Fuga suscipit recusandae provident consequuntur vero.

            </p>
          </div>
          <div className="cl-to-actn">
            <a href="">Read more</a>
          </div>
        </div>
          </div>
      </article>
     
    </div>
    <footer>made by  Nayemm</footer>
   </body>)
}
export default app;

import './App.scss';
import dp from '../src/assets/IMG_20230813_215501_535.jpg';
import insta from '../src/assets/600px-Instagram_icon.png';
import snap from '../src/assets/pngwing.com.png';
import twitter from '../src/assets/—Pngtree—twitter icon_3584901.png';
import you from '../src/assets/vecteezy_youtube-logo-png-youtube-icon-transparent_18930688_836.png';
import mail from '../src/assets/mail.png';
import git from '../src/assets/GitHub-Mark.png'


function App() {
  return (
    <div className="App">
       <div class="box" >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='container'>
      
        <div className='container_contain'>
          <img className='dp image-fluid' src={dp} alt='404'/>
          <h3>@Ajay</h3>
          <div className='btn_container'>
            <a href='https://github.com/ajayshankar-k' target='_blank'>
              <div className='btn'>
                <div className='img_div'>
                  <img className='btn_img' src={git} />
                </div>
                <div className='title_div'>
                  GitHub
                </div>
              </div>
            </a>
            <a href='mailto:ajayshaz35@gmail.com' target='_blank'>
              <div className='btn'>
                <div className='img_div'>
                  <img className='btn_img' src={mail} />
                </div>
                <div className='title_div'>
                  Mail
                </div>
              </div>
            </a>
            <a href='https://instagram.com/still_shaz' target='_blank'>
              <div className='btn'>
                  <div className='img_div'>
                    <img className='btn_img' src={insta} />
                  </div>
                  <div className='title_div'>
                    Instagram
                  </div>
              </div>
            </a>
            <a href='https://www.snapchat.com/add/still_shaz' target='_blank'>
              <div className='btn'>
                  <div className='img_div'>
                    <img className='btn_img' src={snap} />
                  </div>
                  <div className='title_div'>
                    Snapchat
                  </div>
              </div>
            </a>
            <a href='https://twitter.com/_still_shaz_' target='_blank'>
              <div className='btn'>
                  <div className='img_div'>
                    <img className='btn_img' src={twitter} />
                  </div>
                  <div className='title_div'>
                    Twitter
                  </div>
              </div>
            </a>
            <a href='https://youtube.com/@DiELikEAMaN_' target='_blank'>
              <div className='btn'>
                  <div className='img_div'>
                    <img className='btn_img' src={you} />
                  </div>
                  <div className='title_div'>
                    YouTube
                  </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

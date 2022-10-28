import React from 'react'
import { Link } from 'react-router-dom'
import Funny from './img/funny.svg'

function HomeBetween() {
  return (
    <div className='container'>
      <div className='bettwenHomeHeader1'>
        <div className='bettwenHomeHeader'>
          <h2 style={{
            margin: "0",
            fontFamily: 'sans-serif',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "32px",
            color: "black"
          }}>
            Home
          </h2>

          <button>
            <img src={Funny} alt='funny' />
          </button>
        </div>

        <div className='userDiv'>
          <div>
            <div style={{
              display:"flex"
            }}>
              <img src='data:image/png;base64,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' alt=''/>
  
                <input className='sideInp' placeholder={"What’s happening"} type={'text'}/>
            </div>

            <div>

              <ul style={{
                marginTop:"35px",
                display:"flex",
                alignItems:"center",
                gap:"10px"
              }}>
                <li><Link><img src='	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…LfKiCEJdwDPjTEMlPXaPeN2Ct72LcmJPMAAAAAElFTkSuQmCC' alt=''/></Link></li>
                <li><Link><img src='	https://tweeter-clone-two.vercel.app/static/media/gif.f68662e5652fac46ebe245e358fb7a7a.svg' alt=''/></Link></li>
                <li><Link><img src='https://tweeter-clone-two.vercel.app/static/media/text-setings.f54175d4155e5c8a00057cca563c9840.svg' alt=''/></Link></li>
                <li><Link><img src='	https://tweeter-clone-two.vercel.app/static/media/stiker.f95083551cce2ea6723d2c0dbaec350e.svg' alt=''/></Link></li>
                <li><Link><img src='https://tweeter-clone-two.vercel.app/static/media/schedule.5acf2c1cbb8d2a5477616abbb3dbb87a.svg' alt=''/></Link></li>
              </ul>
            </div>
          </div>
          <button className='buttonSide'>
            Tweet
          </button>

        </div>

        <div>
              <div style={{
                display:"flex"
               }}>
               
                <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwA…G03yF0c0jbI/mP0Qjtx5/B/rnRnoMpy91AAAAAElFTkSuQmCC'} alt=''/>
              </div>
            </div>
            

      </div>
    </div>
  )
}

export default HomeBetween
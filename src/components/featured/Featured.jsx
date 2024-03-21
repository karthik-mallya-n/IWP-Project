import React from './featured.css'


export default function Featured() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
            <img src="syd.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>&nbsp;Australia</h1>
                <h2>&nbsp;999+ Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="new.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>&nbsp;New York City</h1>
                <h2>&nbsp;550+ Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="hun.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>&nbsp;Hungary</h1>
                <h2>&nbsp;750+ Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="gate.jpg" alt="" className='featuredImg'/>
            <div className="featuredTitles">
                <h1>&nbsp;India</h1>
                <h2>&nbsp;15000+ Properties</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

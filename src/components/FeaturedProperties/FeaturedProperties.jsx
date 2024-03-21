import './FeaturedProperties.css'

export default function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
      <img src="le.jpg" alt="" className="fpImg" />
      <span className="fpName">Le Villagio</span>
      <span className="fpCity">Wayanad</span>
      <span className="fpPrice">Starting from 13999/-</span>
      <div className="fpRating">
        <button>9.2</button>
      </div>
      <span>Excellent</span>
      </div>
      <div className="fpItem">
      <img src="west.jpg" alt="" className="fpImg" />
      <span className="fpName">The WestIn</span>
      <span className="fpCity">Gurgaon</span>
      <span className="fpPrice">Starting from 14459/-</span>
      <div className="fpRating">
        <button>9.3</button>
      </div>
      <span>Excellent</span>
      </div>
      <div className="fpItem">
      <img src="taj.jpg" alt="" className="fpImg" />
      <sapn className="fpName">Taj</sapn>
      <sapn className="fpCity">Kannur</sapn>
      <sapn className="fpPrice">Starting from 11999/-</sapn>
      <div className="fpRating">
        <button>9.5</button>
      </div>
      <span>Excellent</span>
      </div>
      <div className="fpItem">
      <img src="Hyatt.jpg" alt="" className="fpImg" />
      <sapn className="fpName">Grand Hyatt</sapn>
      <sapn className="fpCity">Jaipur</sapn>
      <sapn className="fpPrice">Starting from 15699/-</sapn>
      <div className="fpRating">
        <button>9.0</button>
      </div>
      <span>Excellent</span>
      </div>
    </div>
  )
}

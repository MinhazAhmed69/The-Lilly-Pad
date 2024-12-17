import React from 'react'

const Accordion = () => {
  return (
          <div className="w-full max-w-lg mt-8">
        <div className="collapse collapse-plus bg-base-200 mb-4">
          <input type="radio" name="accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">Our Journey</div>
          <div className="collapse-content">
            <p>
              Since 1984, we have been dedicated to serving our community with the best flavors and an unforgettable experience.
              From a humble start to becoming a well-loved brand, our journey is built on passion and excellence.
            </p>
          </div>
        </div>
        
        <div className="collapse collapse-plus bg-base-200 mb-4">
          <input type="radio" name="accordion" />
          <div className="collapse-title text-xl font-medium">Our Vision</div>
          <div className="collapse-content">
            <p>
              We envision creating a place where people from all walks of life can come together and enjoy delightful cuisine in a warm, welcoming environment.
              We strive to inspire a sense of togetherness and shared joy through our food and ambiance.
            </p>
          </div>
        </div>
        
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="accordion" />
          <div className="collapse-title text-xl font-medium">Our Future</div>
          <div className="collapse-content">
            <p>
              Looking forward, we plan to expand globally, bringing our unique flavors and exceptional service to new regions and communities.
              We are excited to introduce innovative dishes while staying true to our roots and continuing to delight our guests.
            </p>
          </div>
        </div>
      </div>

  )
}

export default Accordion
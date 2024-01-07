
import image from '../../assets/images/dining.jpg'
import image2 from '../../assets/images/swim.jpg'

const DiningAndBar = () => {
  return (
    <div className="pt-16 max-w-[1200px] mx-auto pb-16 font-workSans">
    {/* Row-1 */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="uppercase text-center lg:text-left text-xs lg:text-base ">INDULGENCE AT ITS FINEST</h2>
            <h2 className="text-center lg:text-left text-lg lg:text-4xl font-semibold pb-3">Dining & Bars</h2>
            <p className="text-justify  ">
            Hotels boast varied dining venues encompassing fine, casual, and specialty restaurants alongside vibrant bars with an array of beverages. Guests enjoy room service, breakfast options, and specialized event catering. In-room minibars cater to personal tastes, while flexible operating hours ensure accessibility to breakfast, lunch, dinner, and late-night dining. This diverse array of dining facilities elevates guests' experiences, offering a range of culinary pleasures and social spaces throughout their stay.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img
          className="w-[80%] mx-auto rounded-xl"
          src={image}
          alt=""
        />
      </div>
      </div>
    {/* Row-2 */}
      <div className="max-w-6xl pt-12 mx-auto flex flex-col lg:flex-row-reverse px-4 lg:px-0 items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
            <h2 className="uppercase text-center lg:text-left text-xs lg:text-base ">LUXURIOUS EXPERIENCE</h2>
            <h2 className="text-center lg:text-left text-lg lg:text-4xl font-semibold pb-3">Wellness & SPA</h2>
            <p className="text-justify  ">
            Luxurious hotels provide extensive wellness and spa facilities for guest rejuvenation. These include diverse spa treatments, yoga, and fitness programs aimed at holistic well-being. Amenities feature pools, saunas, and gyms equipped with modern facilities and personalized training. Some hotels offer wellness-themed rooms and nutritious dining choices, enhancing the overall experience. Expert therapists deliver massages, facials, and body treatments, ensuring guests can unwind and revitalize during their stay, fostering a serene environment conducive to relaxation and wellness.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img
          className="w-[80%] mx-auto rounded-xl"
          src={image2}
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default DiningAndBar;
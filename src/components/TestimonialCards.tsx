const TestimonialCards = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-0 relative">
        {/* First Testimonial Card */}
        <div 
          className="absolute bg-[#F3F3F3] rounded-[50px] z-10"
          style={{
            left: '5.29%', // 80px / 1512px = 5.29%
            top: '189px',
            width: '36.51%', // 552px / 1512px = 36.51%
            height: '308px'
          }}
        >
          <div className="p-12 pb-16">
            <p className="text-[22px] font-['Nunito:SemiBold',_sans-serif] font-semibold text-[#333333] leading-normal">
              <span className="font-['Nunito:Black',_sans-serif] font-black">Sheff Students Say</span>
              {` 'Don't feel as though you need to live a typical 'university experience.' Everyone's journey is unique, and taking time for yourself to explore the city, settle into campus and find your group is just as important as learning! There's no pressure to go to clubs, drink, do sports etc... you can experience university at your own pace!'`}
            </p>
          </div>
        </div>

        {/* Second Testimonial Card */}
        <div 
          className="absolute bg-[#F3F3F3] rounded-[50px] z-10"
          style={{
            left: '5.29%', // 80px / 1512px = 5.29%
            top: '547px',
            width: '36.51%', // 552px / 1512px = 36.51%
            height: '336px'
          }}
        >
          <div className="p-12 pb-16">
            <p className="text-[22px] font-['Nunito:SemiBold',_sans-serif] font-semibold text-[#333333] leading-normal">
              <span className="font-['Nunito:Black',_sans-serif] font-black">Sheff Students Say</span>
              {` 'It's great to get involved, but remember you don't have to get involved in everything! Being a fresher is a very exciting time with lots of things going on, which you should definitely check out, however it can sometimes be exhausting to try and do everything. Basically, it's okay to have a restful night in, and you probably should. :)'`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
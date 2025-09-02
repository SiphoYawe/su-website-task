import Image from 'next/image';

const ImageGallery = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-0 relative">
        {/* Circular student image on right */}
        <div 
          className="absolute z-20"
          style={{
            right: '8.73%', // Positioned from right
            top: '23px',
            width: '25.07%', // 379px / 1512px = 25.07%
            aspectRatio: '1'
          }}
        >
          <Image
            src="/images/1f3c245a762981c3be360eb4b7699c1709ae4a72.png"
            alt="Student activities"
            width={379}
            height={379}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        {/* Background image container on left */}
        <div 
          className="absolute z-5"
          style={{
            left: '-6.15%', // -93px / 1512px = -6.15%
            top: '23px',
            width: '47.95%', // 725px / 1512px = 47.95%
            height: '350px'
          }}
        >
          <Image
            src="/images/f7fc36b8826be34d5e5b092769ab4d6527534b54.png"
            alt="Student community background"
            width={725}
            height={350}
            className="rounded-[50px] object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
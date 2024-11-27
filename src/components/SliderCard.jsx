import { PiArrowCircleLeftThin, PiArrowCircleRightThin } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const data = [
  {
    id: 1,
    name: "Helen Jummy",
    role: "Team Lead",
    description: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    image: "src/assets/images/avatar1.png",
    logo: "src/assets/images/Logo-grey-1.png",
  },
  {
    id: 2,
    name: "Hellena John",
    role: "Co-founder",
    description: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    image: "src/assets/images/avatar2.png",
    logo: "src/assets/images/Logo-grey-2.png",
  },
  {
    id: 3,
    name: "David Oshodi",
    role: "Manager",
    description: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquot id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    image: "src/assets/images/avatar3.png",
    logo: "src/assets/images/Logo-grey-3.png",
  },
  {
    id: 4,
    name: "Lisa Mali",
    role: "Designer",
    description: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    image: "src/assets/images/avatar4.png",
    logo: "src/assets/images/Logo-grey-2.png",
  }
];

const SliderCard = () => {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="w-full h-[750px] bg-light-yellow px-6 sm:px-12 md:px-20 py-20">
      <div className="flex flex-col sm:flex-row justify-between sm:justify-between items-center sm:items-center gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-blue leading-tight text-center sm:text-left">
          Because they love us
        </h1>
        <div className="flex justify-end items-center">
          <div className="hidden md:flex gap-2">
            <button
              className="transform p-2 scale-150 transition-all duration-200"
              onClick={handlePrev}
            >
              <PiArrowCircleLeftThin className="h-8 w-8 text-coffee" />
            </button>
            <button
              className="transform p-2 scale-150 transition-all duration-200"
              onClick={handleNext}
            >
              <PiArrowCircleRightThin className="h-8 w-8 text-coffee" />
            </button>
          </div>
        </div>
      </div>

      {/* Yellow Background */}
      <div className="absolute left-0 right-0 px-4 sm:px-6 h-[25rem] md:h-[30rem] lg:h-[25rem] bg-[#FDE68A] gap-6 mb-12"></div>

      {/* Cards Section (Slider) */}
      <div className="slider-container relative overflow-hidden z-10 top-[40px]">
        <Slider {...settings} ref={sliderRef}>
          {data.map((d) => (
            <div
              key={d.id}
              className="relative flex flex-col justify-between  bg-white rounded-lg p-8 w-[384px] h-[430px] mx-4 shadow-custom-3"
            >
              {/* Logo section */}
              <div className="mb-8 py-4">
                <img src={d.logo} alt="logo1" className="h-8" />
              </div>

              {/* Description section */}
              <div className=" flex-grow py-5 mb-5">
                <p className=" sm:text-2xl text-dark-blue">{d.description}</p>
              </div>

              {/* Profile section */}
              <div className="flex items-center gap-4 ">
                <img
                  src={d.image}
                  alt="Avatar"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-dark-blue">
                    {d.name}
                  </h3>
                  <p className="text-gray-600">{d.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderCard;

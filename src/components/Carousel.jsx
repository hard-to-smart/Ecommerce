import { Carousel, IconButton } from "@material-tailwind/react";
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
export const Banner = () => {
  return(
    <Carousel className="h-[500px]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          size="lg"
          color="pink"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 ring-2 ring-pink-50 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="pink"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 ring-2 ring-pink-50 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={banner1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={banner2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={banner3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default Banner
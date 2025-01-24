import { brandData, ourProject, IndustryName } from "../data";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SettingsIcon from '@mui/icons-material/Settings';
import PrintIcon from '@mui/icons-material/Print';
import SourceIcon from '@mui/icons-material/Source';
// import 'animate.css';



const digitalToolkit = [
  { icon: <MobileScreenShareIcon fontSize="large" />, name: "Social Media Marketing" },
  { icon: <WebIcon fontSize="large" />, name: "Website Development" },
  { icon: <BrushIcon fontSize="large" />, name: "Logo Designing" },
  { icon: <BrushIcon fontSize="large" />, name: "Graphic Designing" },
  { icon: <GroupIcon fontSize="large" />, name: "Digital Marketing" },
  { icon: <StarIcon fontSize="large" />, name: "Influencer Marketing" },
  { icon: <SourceIcon fontSize="large" />, name: "Content Writing" },
  { icon: <ThumbUpIcon fontSize="large" />, name: "Google/Facebook Reviews" },
  { icon: <SettingsIcon fontSize="large" />, name: "Search Engine Optimization" },
  { icon: <PrintIcon fontSize="large" />, name: "Printing" },
];


export const ShowCaseCart = () => {
  return (
    <>

      <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug mt-[5rem] m-7">
        We Are Growth Partners to
        <span className="text-secondary-blue"> 20+ Leading Brands</span>
      </h2>
      <p className="text-center text-2xl md:text-2xl mb-3 text-text-light">Helping clients around the world to
        launch their businesses</p>

      <div className="flex flex-wrap gap-4 sm:gap-[3.7rem] justify-center">
        {
          brandData.map(({ image, name }, index) => {
            return (
              <div
                key={index}
                className="group block w-full sm:w-auto max-w-xs mx-auto rounded-lg p-6 bg-half-white ring-1 ring-dark-gray shadow-lg transition duration-100 hover:ring-4 hover:ring-secondary-blue hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-dark-gray hover:scale-105 hover:shadow-xl transition-transform duration-300">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-20 object-contain bg-half-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-dark-gray opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                    {/* Additional content (e.g., title) can go here */}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[4rem] mt-[4rem] mb-20">
          {ourProject.map(({ image }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md h-[350px] w-[300px] group"
            >
              <img
                src={image}
                alt="Long Image"
                className="cursor-pointer absolute top-0 left-0 w-full transition-transform duration-500 group-hover:translate-y-[-65%]"
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export const IndustryPonits = () => {
  return (
    <>
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug mt-12 mx-4">
        <span className="text-secondary-blue"> Industries We Worked For </span>
      </h2>
      <div className="flex flex-wrap gap-8 justify-center mt-10 px-4">
        {IndustryName.map(({ industriesName }, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Rotated Square */}
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform rotate-45 flex">
              <div className="absolute inset-0 bg-white rounded-lg"></div>
            </div>
            {/* Industry Name */}
            <p
              className="text-center text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl mt-4"
              style={{
                textShadow: "4px 4px 6px rgba(171, 149, 149, 0.5)",
              }}
            >
              {industriesName}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};


function DigitalToolkit(service) {
  return (
    <div
      key={service.name}
      className="animate-pulse bg-dark-gray group block w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-60 mx-auto rounded-lg p-3 sm:p-4 bg-half-white ring-1 ring-secondary-blue shadow-lg transition-all duration-500"
    >
      <div className="flex flex-col items-center text-white space-y-3 sm:space-y-4 transform transition-all hover:scale-105">
        <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-3 sm:p-4 rounded-full shadow-lg">
          {service.icon}
        </div>
        <p
          className="text-center text-sm sm:text-base md:text-lg font-bold text-white animate-fadeIn"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 4px 4px 8px rgba(0, 123, 255, 0.2)",
          }}
        >
          {service.name}
        </p>
      </div>
    </div>
  );
}

export function ServiceCards() {
  return (
    <>
      <h2 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug mt-12 mx-5">
        <span className="text-secondary-blue"> Our Digital Toolkit </span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 mt-5">
        {digitalToolkit.map(DigitalToolkit)}
      </div>
    </>
  );
}




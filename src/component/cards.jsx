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
  { icon: <GroupIcon fontSize="large" />, name: "Viral Marketing" },
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
      <div className="flex gap-[3.7rem] flex-wrap">
        {
          brandData.map(({ image, name }, index) => {
            return (<div key={index} className="group block max-w-xs mx-auto rounded-lg p-6 bg-half-white ring-1 ring-dark-gray shadow-lg transition duration-100 hover:ring-4 hover:ring-secondary-blue hover:scale-105">
              <div className="group relative overflow-hidden rounded-lg shadow-lg bg-dark-gray hover:scale-105 hover:shadow-xl transition-transform duration-300">
                <img
                  src={image} // Replace with the brand's image URL
                  alt="Brand Logo"
                  className="w-full h-20 object-contain bg-half-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-dark-gray opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">

                </div>
              </div>

            </div>)
          })
        }

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[4rem] mt-[4rem]">
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
    </>
  );
};

export const IndustryCards = () => {
  return <>
    <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug mt-[3rem] m-5">
      <span className="text-secondary-blue"> Industries We Worked for </span>
    </h2>
    <div className="flex m-[2rem] flex-wrap gap-6 justify-center">
      {
        IndustryName.map(({ industriesName }, index) => {
          return <>
            <div className="relative w-24 h-24 transform rotate-45 flex mt-[3rem]">
              <div className="absolute top-0 left-0 bg-blue-500 w-full h-full rounded-lg shadow-lg"></div>
              <div className="absolute top-5/8 left-5/8 bg-white w-1/4 h-1/4 rounded-lg"></div>
            </div>
            <p className="text-center text-white font-bold text-4xl" style={{ "textShadow": "4px 4px 6px rgba(171, 149, 149, 0.5)" }}>
              {industriesName}
            </p>
          </>

        }
        )
      }
    </div>
  </>
}


function DigitalToolkit(service) {
  return (
    <div
      key={service.name}
      className="animate-pulse bg-gray-600 group block w-48 h-60 mx-auto rounded-lg p-4 bg-half-white ring-1 ring-dark-gray shadow-lg transition-all duration-500"
    >
      <div className="flex flex-col items-center text-white space-y-4 transform transition-all hover:scale-105">
        <div className="bg-gradient-to-r from-secondary-blue to-primary-blue p-4 rounded-full shadow-lg">
          {service.icon}
        </div>
        <p
          className="text-center text-lg font-bold text-white animate-fadeIn"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7), 4px 4px 8px rgba(255, 255, 255, 0.3)",
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
      <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight text-white leading-snug mt-[3rem] m-5">
        <span className="text-secondary-blue"> Our Digital Toolkit </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {digitalToolkit.map(DigitalToolkit)}
      </div>
    </>
  );
}




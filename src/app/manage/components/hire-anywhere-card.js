import { useMemo } from "react";

const HireAnywhereCard = ({ propTop, propLeft }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[2678px] left-[37px] w-[432px] h-[254px] text-left text-lg text-gray-900 font-cta"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-mediumseagreen-600 w-[432px] h-[254px]" />
      <div className="absolute top-[35px] left-[29px] w-[374px] h-[184px]">
        <div className="absolute top-[112px] left-[0px] w-[374px] h-[72px]">
          <div className="absolute top-[0px] left-[31px] font-semibold">
            Hire anywhere, without a subsidiary
          </div>
          <div className="absolute top-[34px] left-[0px] text-base text-darkslategray-300 text-center flex items-center justify-center w-[374px]">
            Hire whoever you want and let your team be employed by our legal
            entities in 160 countries.
          </div>
        </div>
        <div className="absolute top-[0px] left-[137px] w-[100px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-lightcyan-100 w-[100px] h-[100px]" />
          <img
            className="absolute top-[20px] left-[20px] w-[60px] h-[60px] overflow-hidden"
            alt=""
            src="/materialsymbolsmovelocationoutline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HireAnywhereCard;

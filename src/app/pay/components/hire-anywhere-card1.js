import { useMemo } from "react";

const HireAnywhereCard1 = ({ propTop }) => {
  const groupDiv7Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[2781px] left-[80px] w-[374px] h-[194px] text-left text-lg text-gray-900 font-cta"
      style={groupDiv7Style}
    >
      <div className="absolute top-[112px] left-[0px] w-[374px] h-[82px]">
        <div className="absolute top-[0px] left-[31px] font-semibold">
          Hire anywhere, without a subsidiary
        </div>
        <div className="absolute top-[44px] left-[0px] text-base text-darkslategray-300 text-center flex items-center justify-center w-[374px]">
          Hire whoever you want and let your team be employed by our legal
          entities in 160 countries.
        </div>
      </div>
      <div className="absolute top-[0px] left-[137px] w-[100px] h-[100px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightcyan-100 w-[100px] h-[100px]" />
        <img
          className="absolute top-[20px] left-[20px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/materialsymbolsmovelocationoutline.svg"
        />
      </div>
    </div>
  );
};

export default HireAnywhereCard1;

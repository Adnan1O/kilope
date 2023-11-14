import { useMemo } from "react";

const ContainerForm = ({ imageDimensions, propTop, propLeft }) => {
  const groupDiv15Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[5148px] left-[1082px] w-[316px] h-[378px] text-left text-5xl text-white font-cta"
      style={groupDiv15Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-gold-200 w-[316px] h-[378px]" />
      <div className="absolute top-[210px] left-[33px] leading-[33.6px] font-semibold flex items-center w-[261px]">{`Hire global Contractors and full-time employees   `}</div>
      <div className="absolute top-[319px] left-[33px] w-40 h-[41px] text-base">
        <div className="absolute top-[9px] left-[19px] w-[122px] h-[23px]">
          <div className="absolute top-[2px] left-[0px] capitalize font-medium">
            Learn More
          </div>
          <img
            className="absolute top-[0px] left-[99px] w-[23px] h-[23px] overflow-hidden"
            alt=""
            src="/arrowright1.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-9xs box-border w-40 h-[41px] border-[0.5px] border-solid border-silver" />
      </div>
      <img
        className="absolute h-[36.27%] w-[45.25%] top-[6.88%] right-[25%] bottom-[56.85%] left-[29.75%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={imageDimensions}
      />
      <div className="absolute top-[177px] left-[33px] font-extrabold">
        Shield
      </div>
    </div>
  );
};

export default ContainerForm;

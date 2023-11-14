import { useMemo } from "react";

const GroupComponent7 = ({ propTop, propLeft }) => {
  const groupDiv13Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[5148px] left-[388px] w-[316px] h-[378px] text-left text-5xl text-white font-cta"
      style={groupDiv13Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-cornflowerblue-300 w-[316px] h-[378px]" />
      <div className="absolute top-[174px] left-[26px] leading-[33.6px] font-extrabold flex items-center w-[269px]">
        Pay
      </div>
      <div className="absolute top-[210px] left-[26px] leading-[33.6px] font-semibold flex items-center w-[275px]">{`Hire global Contractors and full-time employees   `}</div>
      <div className="absolute top-[319px] left-[26px] w-40 h-[41px] text-base">
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
        className="absolute top-[26px] left-[76px] w-[164px] h-[143px] overflow-hidden"
        alt=""
        src="/money-investment.svg"
      />
    </div>
  );
};

export default GroupComponent7;

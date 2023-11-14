import { useMemo } from "react";

const ManageContainer = ({ propTop, propLeft }) => {
  const groupDiv14Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[5148px] left-[735px] w-[316px] h-[378px] text-left text-5xl text-white font-cta"
      style={groupDiv14Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue-400 w-[316px] h-[378px]" />
      <div className="absolute top-[174px] left-[32px] leading-[33.6px] font-extrabold flex items-center w-[269px]">
        Manage
      </div>
      <div className="absolute top-[210px] left-[32px] leading-[33.6px] font-semibold flex items-center w-[275px]">{`Hire global Contractors and full-time employees   `}</div>
      <div className="absolute top-[319px] left-[32px] w-40 h-[41px] text-base">
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
        className="absolute top-[26px] left-[96px] w-[136px] h-[136px] overflow-hidden"
        alt=""
        src="/business-task-list.svg"
      />
    </div>
  );
};

export default ManageContainer;

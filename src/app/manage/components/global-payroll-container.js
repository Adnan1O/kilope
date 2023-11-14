import { useMemo } from "react";

const GlobalPayrollContainer = ({ propTop }) => {
  const groupDiv11Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[4246px] left-[345px] w-[751px] h-[113px] text-center text-lg text-darkslateblue-200 font-cta"
      style={groupDiv11Style}
    >
      <div className="absolute top-[1px] left-[403px] w-[348px] h-[110px]">
        <div className="absolute top-[52px] left-[0px] rounded-t-lg rounded-b-none bg-mediumseagreen-200 w-[348px] h-9" />
        <div className="absolute top-[88px] left-[calc(50%_-_171px)] tracking-[0.17px]">
          countries running global payroll with us
        </div>
        <div className="absolute top-[0px] left-[125px] w-[95px] h-[86px] text-left text-[69.06px] text-cornflowerblue-100">
          <b className="absolute top-[2px] left-[2px] uppercase">8+</b>
          <b className="absolute top-[0px] left-[0px] uppercase text-darkslateblue-200">
            8+
          </b>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_375.5px)] w-[348px] h-[113px]">
        <div className="absolute top-[95px] left-[calc(50%_-_174px)] tracking-[0.17px] leading-[18px] flex items-center justify-center w-[348px] h-[18px]">
          hours saved monthly on payroll admin
        </div>
        <div className="absolute top-[57px] left-[8px] rounded-t-3xl rounded-b-none bg-royalblue-100 w-[332px] h-9" />
        <div className="absolute top-[0px] left-[75px] w-[198px] h-[98px] text-left text-[71.88px] text-cornflowerblue-100">
          <b className="absolute top-[2px] left-[2px] leading-[96px] uppercase">
            300+
          </b>
          <b className="absolute top-[0px] left-[0px] leading-[96px] uppercase text-darkslateblue-200">
            300+
          </b>
        </div>
      </div>
    </div>
  );
};

export default GlobalPayrollContainer;

import { useMemo } from "react";

const CountryFilterForm = ({ propTop, propLeft }) => {
  const groupDiv6Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[4625px] left-[67px] w-[1301px] h-64 text-center text-lg text-black font-cta"
      style={groupDiv6Style}
    >
      <div className="absolute top-[210px] left-[0px] font-semibold">
        Hire in 160+ countries
      </div>
      <div className="absolute top-[210px] left-[calc(50%_-_334.5px)] font-semibold">
        Pay in 100+ currencies
      </div>
      <div className="absolute top-[210px] left-[calc(50%_+_47.5px)] font-semibold flex items-center justify-center w-[232px]">
        Get 24x7 expert support
      </div>
      <div className="absolute top-[210px] left-[calc(50%_+_360.5px)] font-semibold">
        Experience same day onboarding
      </div>
      <img
        className="absolute top-[3px] left-[255.5px] w-[3px] h-[253px]"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[3px] left-[603.5px] w-[3px] h-[253px]"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[3px] left-[952.5px] w-[3px] h-[253px]"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[47px] left-[0px] w-[190.4px] h-[150px] overflow-hidden"
        alt=""
        src="/location.svg"
      />
      <img
        className="absolute top-[0px] left-[702px] w-[197px] h-[197px] overflow-hidden"
        alt=""
        src="/customer-support.svg"
      />
      <img
        className="absolute top-[4px] left-[1080.5px] w-[193px] h-[193px] overflow-hidden"
        alt=""
        src="/business-deal.svg"
      />
      <img
        className="absolute top-[21px] left-[304px] w-[223.9px] h-44 overflow-hidden"
        alt=""
        src="/man-doing-online-payment.svg"
      />
    </div>
  );
};

export default CountryFilterForm;

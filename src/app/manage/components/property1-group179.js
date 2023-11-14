import { useMemo } from "react";

const Property1Group179 = ({
  property1Group179Position,
  property1Group179Top,
  property1Group179Left,
}) => {
  const property1Group179Style = useMemo(() => {
    return {
      position: property1Group179Position,
      top: property1Group179Top,
      left: property1Group179Left,
    };
  }, [property1Group179Position, property1Group179Top, property1Group179Left]);

  return (
    <div
      className="w-[1360px] h-[59px] text-left text-sm text-white font-cta"
      style={property1Group179Style}
    >
      <div className="absolute top-[33.9%] left-[82.87%] leading-[19.6px] font-medium">
        Log In
      </div>
      <div className="absolute h-[27.12%] w-[31.91%] top-[37.29%] right-[34.04%] bottom-[35.59%] left-[34.04%] text-center">
        <div className="absolute h-full w-[21.89%] top-[0%] right-[0%] bottom-[0%] left-[78.11%]">
          <div className="absolute top-[0%] left-[0%] leading-[16px] font-medium">
            Resources
          </div>
          <img
            className="absolute h-full w-[16.84%] top-[0%] right-[0%] bottom-[0%] left-[83.16%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/img.svg"
          />
        </div>
        <div className="absolute h-full w-[10.83%] top-[0%] right-[32.03%] bottom-[0%] left-[57.14%]">
          <div className="absolute top-[0%] left-[0%] leading-[16px] font-medium">
            Pricing
          </div>
        </div>
        <div className="absolute h-full w-[18.2%] top-[0%] right-[53%] bottom-[0%] left-[28.8%]">
          <div className="absolute top-[0%] left-[0%] leading-[16px] font-medium">
            Solution
          </div>
          <img
            className="absolute h-full w-[20.25%] top-[0%] right-[0%] bottom-[0%] left-[79.75%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/img.svg"
          />
        </div>
        <div className="absolute h-full w-[18.66%] top-[0%] right-[81.34%] bottom-[0%] left-[0%]">
          <div className="absolute top-[0%] left-[0%] leading-[16px] font-medium">
            Platform
          </div>
          <img
            className="absolute h-full w-[19.75%] top-[0%] right-[0%] bottom-[0%] left-[80.25%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/img.svg"
          />
        </div>
      </div>
      <img
        className="absolute h-full w-[11.69%] top-[0%] right-[88.31%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/kilope2-1@2x.png"
      />
      <div className="absolute h-[67.8%] w-[10.88%] top-[16.95%] right-[0%] bottom-[15.25%] left-[89.12%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl box-border border-[1px] border-solid border-white" />
        <div className="absolute top-[25%] left-[12.16%] leading-[19.6px] font-medium">
          Request A Demo
        </div>
      </div>
    </div>
  );
};

export default Property1Group179;

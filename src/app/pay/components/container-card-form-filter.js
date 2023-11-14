import { useMemo } from "react";

const ContainerCardFormFilter = ({
  dimensionLabel,
  imageLabel,
  imageCode,
  propTop,
  propLeft,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[2275px] left-[991px] w-[410px] h-[168px] text-left text-lg text-black font-cta"
      style={groupDiv5Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[410px] h-10">
        <div className="absolute top-[9px] left-[64px] font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10"
          alt=""
          src={dimensionLabel}
        />
      </div>
      <div className="absolute top-[64px] left-[0px] w-[410px] h-10">
        <div className="absolute top-[9px] left-[64px] font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10"
          alt=""
          src={imageLabel}
        />
      </div>
      <div className="absolute top-[128px] left-[0px] w-[410px] h-10">
        <div className="absolute top-[9px] left-[64px] font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10"
          alt=""
          src={imageCode}
        />
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;

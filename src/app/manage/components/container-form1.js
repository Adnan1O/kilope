import { useMemo } from "react";

const ContainerForm1 = ({
  dimensionCode,
  propTop,
  propLeft,
  propLeft1,
  propOpacity,
  propColor,
  propLeft2,
  propColor1,
  propColor2,
}) => {
  const groupDiv8Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const groupDiv9Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const oouiquotesLtrIconStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const groupDiv10Style = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const nameStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const jobRoleStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className="absolute top-[3870px] left-[calc(50%_-_382px)] w-[764px] h-[275px] text-left text-lg text-dimgray-100 font-cta"
      style={groupDiv8Style}
    >
      <div
        className="absolute top-[0px] left-[calc(50%_-_382px)] w-[215px] h-[275px]"
        style={groupDiv9Style}
      >
        <div className="absolute top-[20px] left-[calc(50%_-_107.5px)] rounded-lg bg-royalblue-100 w-[196px] h-[255px]" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_88.5px)] rounded-lg w-[196px] h-[255px] object-cover"
          alt=""
          src="/rectangle-72@2x.png"
        />
      </div>
      <img
        className="absolute top-[15px] left-[259px] w-[39px] h-[39px] overflow-hidden"
        alt=""
        src={dimensionCode}
        style={oouiquotesLtrIconStyle}
      />
      <div className="absolute top-[78px] left-[259px] w-[505px] h-[162px]">
        <div
          className="absolute top-[0px] left-[0px] flex items-center w-[505px]"
          style={loremIpsumDolorStyle}
        >
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis. Nec senectus sed pellentesque
          dictum mi. Sit cras mus arcu eu aliquam morbi.
        </div>
        <div
          className="absolute top-[112px] left-[calc(50%_-_252.5px)] w-[68px] h-[50px] text-center text-5xl text-darkslategray-500"
          style={groupDiv10Style}
        >
          <div
            className="absolute top-[0px] left-[calc(50%_-_34px)] font-semibold"
            style={nameStyle}
          >
            Name
          </div>
          <div
            className="absolute top-[31px] left-[calc(50%_-_34px)] text-base font-medium text-dimgray-100"
            style={jobRoleStyle}
          >
            Job role
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm1;

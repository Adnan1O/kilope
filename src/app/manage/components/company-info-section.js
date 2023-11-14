import { useMemo } from "react";

const CompanyInfoSection = ({ propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[5091px] left-[0px] w-[1440px] h-[529px] text-left text-sm text-darkslategray-500 font-cta"
      style={groupDivStyle}
    >
      <div className="absolute top-[103px] left-[0px] w-[1440px] h-[370px] text-[17.16px]">
        <div className="absolute top-[66px] left-[40px] w-[81px] h-[146px]">
          <b className="absolute top-[0px] left-[0px] leading-[19.2px]">
            Company
          </b>
          <div className="absolute top-[44px] left-[0px] w-[76px] h-[102px] text-[14.88px]">
            <div className="absolute top-[0px] left-[0px] leading-[15px]">
              About
            </div>
            <div className="absolute top-[29px] left-[0px] text-[14.18px] leading-[15px]">
              Why KiloPe
            </div>
            <div className="absolute top-[58px] left-[0px] text-[14.06px] leading-[15px]">
              Pricing
            </div>
            <div className="absolute top-[87px] left-[0px] text-[14.53px] leading-[15px]">
              Careers
            </div>
          </div>
        </div>
        <img
          className="absolute top-[369.7px] left-[40px] w-[1362px] h-[0.5px]"
          alt=""
          src="/vector-8.svg"
        />
        <img
          className="absolute top-[-0.2px] left-[0px] w-[1440px] h-[0.5px]"
          alt=""
          src="/vector-9.svg"
        />
        <div className="absolute top-[66px] left-[204px] w-[163px] h-[175px] text-[16.45px]">
          <b className="absolute top-[0px] left-[0px] leading-[19.2px]">
            Global Hiring Toolkit
          </b>
          <div className="absolute top-[44px] left-[0px] w-[106px] h-[131px] text-[14.53px]">
            <div className="absolute top-[0px] left-[0px] text-[13.95px] leading-[15px]">
              Library
            </div>
            <div className="absolute top-[29px] left-[0px] text-[14.41px] leading-[15px]">
              Blogs
            </div>
            <div className="absolute top-[58px] left-[0px] text-[14.18px] leading-[15px]">
              Glossary
            </div>
            <div className="absolute top-[87px] left-[0px] leading-[15px]">
              Cost Calculator
            </div>
            <div className="absolute top-[116px] left-[0px] leading-[15px]">
              FAQs
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[450px] w-[158px] h-[117px]">
          <b className="absolute top-[0px] left-[0px] leading-[19.2px]">
            Global Compliance
          </b>
          <div className="absolute top-[44px] left-[0px] w-[137px] h-[73px] text-[14.06px]">
            <div className="absolute top-[0px] left-[0px] leading-[15px]">
              Leave Policy
            </div>
            <div className="absolute top-[29px] left-[0px] text-[13.83px] leading-[15px]">
              Employment Laws
            </div>
            <div className="absolute top-[58px] left-[0px] text-[14.41px] leading-[15px]">
              Background Checks
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[691px] w-40 h-[204px] text-[16.73px]">
          <b className="absolute top-[0px] left-[0px] leading-[19.2px]">
            Global Employment
          </b>
          <div className="absolute top-[44px] left-[0px] w-40 h-40 text-[14.06px]">
            <div className="absolute top-[0px] left-[0px] text-mini-3 leading-[15px]">
              EOR Guide
            </div>
            <div className="absolute top-[29px] left-[0px] leading-[15px]">
              Payroll Guide
            </div>
            <div className="absolute top-[58px] left-[0px] leading-[15px]">
              PEO Guide
            </div>
            <div className="absolute top-[87px] left-[0px] text-[13.83px] leading-[15px]">
              Work Permit Guide
            </div>
            <div className="absolute top-[116px] left-[0px] text-[13.83px] leading-[15px]">
              Hire Remote Teams
            </div>
            <div className="absolute top-[145px] left-[0px] text-[13.95px] leading-[15px]">
              Hire Remote Developers
            </div>
          </div>
        </div>
        <b className="absolute top-[69px] left-[1006px] text-[16.59px] leading-[19.2px]">
          Join our Newsletter
        </b>
        <div className="absolute top-[113px] left-[1006px] text-[13.13px] leading-[17px]">
          <p className="m-0">
            Receive the latest news about international hiring, employment,
          </p>
          <p className="m-0">compliance and payroll</p>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[40px] w-[175px] h-[68px] object-cover"
        alt=""
        src="/kilope2-4@2x.png"
      />
      <div className="absolute top-[68px] left-[40px] text-[16.59px] tracking-[0.36px] leading-[27px]">
        Hire anyone, anywhere. Compliantly.
      </div>
      <div className="absolute top-[411px] left-[1006px] text-base flex items-center w-[393px]">
        3rd Floor, Cowork Valley, Divya Diamonds Junction Kavuri Hills Rd,
        Hyderabad Telangana, 500081
      </div>
      <img
        className="absolute top-[0px] left-[1261.3px] w-[30.2px] h-[30.2px] overflow-hidden"
        alt=""
        src="/phinstagramlogothin1.svg"
      />
      <img
        className="absolute top-[0px] left-[1371.8px] w-[30.2px] h-[30.2px] overflow-hidden"
        alt=""
        src="/phfacebooklogo1.svg"
      />
      <img
        className="absolute top-[0px] left-[1206px] w-[30.2px] h-[30.2px] overflow-hidden"
        alt=""
        src="/rilinkedinboxfill1.svg"
      />
      <img
        className="absolute top-[0px] left-[1316.6px] w-[30.2px] h-[30.2px] overflow-hidden"
        alt=""
        src="/mditwitter1.svg"
      />
      <div className="absolute top-[224px] left-[1159px] w-[239px] h-[299px] text-darkslategray-1200">
        <div className="absolute top-[287px] left-[0px] tracking-[0.28px] leading-[12px]">
          Privacy Policy
        </div>
        <div className="absolute top-[calc(50%_-_149.5px)] left-[100px] bg-darkslategray-1100 w-px h-[13px]" />
        <div className="absolute top-[287px] left-[105px] tracking-[0.28px] leading-[12px]">{`Terms & Conditions`}</div>
      </div>
      <div className="absolute top-[503px] left-[40px] tracking-[0.28px] leading-[25.6px] text-[inherit]">
        <a
          className="text-[inherit]"
          href={`https://www.google.com/search?sca_esv=573870793&rlz=1C1CHBD_enIN941IN941&q=7th+sky+technologies+llc+sheridan+address&ludocid=2044171197370645015&sa=X&ved=2ahUKEwjBmN2OovuBAxWxslYBHa_7A4sQ6BN6BAgYEAI`}
          target="_blank"
        >
          <span className="[text-decoration:underline]">Address</span>
        </a>
        : 30N N Gould St Suite R, Sheridan, WY 82801, United States
      </div>
      <div className="absolute top-[271px] left-[1006px] rounded-lg bg-white box-border w-[391px] h-11 border-[0.5px] border-solid border-silver" />
      <div className="absolute top-[275px] left-[1257px] w-[134px] h-9 text-center text-xs text-white">
        <div className="absolute top-[0px] left-[0px] rounded-9xs bg-mediumaquamarine w-[134px] h-9" />
        <div className="absolute top-[7px] left-[21px] w-[92px] h-[21px]">
          <div className="absolute top-[3px] left-[0px] font-semibold">
            Subscribe
          </div>
          <img
            className="absolute top-[0px] left-[71px] w-[21px] h-[21px] overflow-hidden"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoSection;

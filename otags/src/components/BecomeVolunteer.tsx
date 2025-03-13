import Image from "next/image";
import React from "react";

const BecomeVolunteer = () => {
  return (
    <section className="wrapper">
      <div className="w-[750px] mx-auto">
        <div className="flex-center flex-col gap-4">
          <h1 className="text-4xl text-green-primary text-center font-bold">
            Volunteer/Become an Agent
          </h1>
          <p className="text-xl">||</p>
          <Image
            src="/assets/custom-divider.png"
            alt="divider"
            width={176}
            height={26}
          />
        </div>

        <div className="w-full mt-4">
          <p className="text-center text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit
            amet, consectetur
          </p>
          <div className="mt-10 flex-between">
            <div className="w-[306px] flex-center flex-col gap-1">
              <Image
                src="/assets/agent.png"
                alt="agent"
                width={250}
                height={175}
              />
              <h1 className="text-[17px] font-bold">Become an Agent</h1>
              <p className="text-[10px] font-medium text-center px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor
                sit amet
              </p>
            </div>
            <div className="w-[306px] flex-center flex-col gap-1">
              <Image
                src="/assets/volunteer.png"
                alt="agent"
                width={250}
                height={175}
              />
              <h1 className="text-[17px] font-bold">Become an Volunteer</h1>
              <p className="text-[10px] font-medium text-center px-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor
                sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;

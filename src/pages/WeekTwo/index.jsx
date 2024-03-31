import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
export default function WeekTwoPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Define handleImageClick function
  const handleImageClick = () => {
    // Navigate to the WeekTwo route ("/weektwo")
    navigate("/weekone");
  };
  return (
    <>
      <Helmet>
        <title>FigmaDesign</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700" style={{ marginTop: '200px' }}>
        <div className="h-[834px] pb-3 bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat relative" >
          <div className="h-[356px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto md:p-5 absolute max-w-[1038px]">
            <div className="flex items-end h-[346px] w-[61%] md:h-auto ml-[162px] p-4 md:ml-0 bg-[url(/public/images/img_group_12.svg)] bg-cover bg-no-repeat">
              <Text as="p" className="mt-[159px] mb-[129px] !text-black-900">
                Sunny day at a beach
              </Text>
            </div>
            <div className="flex flex-col items-end w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex justify-center w-[29%] md:w-full mr-[214px] p-[17px] md:mr-0 border-blue_gray-100 border-[3px] border-dashed bg-white-A700 shadow-bs rounded-[10px]">
                <Img src="images/img_mask_group.png" alt="image" className="w-[81%] object-cover" />
              </div>
              <Text as="p" className="w-[34%] md:w-full mt-[7px] mr-[180px] md:mr-0 !text-black-900 text-center">
                <>
                  A cold rainy night in a <br />
                  haunted house in October
                </>
              </Text>
              <div className="self-stretch h-[105px] md:h-auto mt-[26px] relative">
                <Text as="p" className="leading-[29px]">
                  <>
                    So, what do you think the definition of setting is?
                    <br />
                    <br />
                    Any guesses?
                  </>
                </Text>
                <div className="flex md:flex-col items-center bottom-[8.00px] right-[4%] m-auto absolute md:relative">
                  <Text size="s" as="p" className="self-end mb-0.5 !text-gray-400">
                    ________________________________________
                  </Text>
                  <Text as="p" className="ml-[37px] md:ml-0">
                    Hint:{" "}
                  </Text>
                  <Button className="flex items-center justify-center h-[47px] w-[47px] ml-3.5 md:ml-0">
                    <Img src="images/img_frame.svg" />
                  </Button>
                  <Button className="flex items-center justify-center h-[47px] w-[47px] ml-3.5 md:ml-0">
                    <Img src="images/img_group_47x47.png" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bottom-[12.00px] right-0 left-0 m-auto md:p-5 absolute max-w-[1064px]">
            {/* <Text as="p" className="w-[98%] md:w-full" style={{ marginTop: '500px' }}>
              The time of the story could be in the past, future, day, night, summer or winter.A story may take place in
              a school, a mall, a desert, an airplane or in a varietyof other places.
            </Text> */}
            <Text as="p" className="w-[98%] md:w-full" style={{ marginTop: '800px' }}>
  The time of the story could be in the past, future, day, night, summer or winter. A story may take place in
  a school, a mall, a desert, an airplane or in a variety of other places.
</Text>

            <div className="flex flex-col items-center mt-[-13px] relative">
              <div className="flex self-stretch justify-between gap-5 z-[1]">
                <div className="flex flex-col items-start h-[48px] w-[5%] md:h-auto p-0.5 bg-[url(/public/images/img_contrast.svg)] bg-cover bg-no-repeat">
                  <div className="flex items-start w-[39%] md:w-full ml-[7px] md:ml-0 z-[1]">
                    <Img src="images/img_vector_1.svg" alt="vectorone_one" className="h-[11px] w-[10px]" />
                    <div className="h-px w-[2px] rotate-[6deg] bg-white-A700 rounded-[1px]" />
                  </div>
                  <Img
                    src="images/img_fluent_person_voice_24_filled.svg"
                    alt="fluentperson"
                    className="self-center h-[24px] w-[24px] mt-[-2px] mb-[9px] relative"
                  />
                </div>
                <div className="flex items-start h-[48px] w-[5%] md:h-auto p-0.5 bg-[url(/public/images/img_user_pink_800.svg)] bg-cover bg-no-repeat">
                  <Img
                    src="images/img_vector_1.svg"
                    alt="vectorone_three"
                    className="h-[11px] w-[10px] mb-[30px] ml-[7px]"
                  />
                  <div className="h-px w-[2px] rotate-[6deg] bg-white-A700 rounded-[1px]" />
                </div>
              </div>
              <div className="flex items-center w-[17%] md:w-full mt-[-45px] gap-[11px] relative">
                {/* <Img src="images/img_layer_7.svg" alt="layerseven_one" className="h-[45px]" /> */}
                  <Img
          src="images/img_layer_7.svg"
          alt="layerseven"
          className="object-cover"
          style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          onClick={handleImageClick} // Call handleImageClick function on click
        />
                <div className="border-purple-50 border border-solid bg-pink-800 flex-1 rounded-lg">
                  <div className="flex justify-center items-center gap-[23px] bg-pink-400_01 rounded-lg">
                    <Text as="p" className="!text-white-A700 text-center">
                      2
                    </Text>
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[5px]" />
                  </div>
                </div>
                <Img src="images/img_layer_7_purple_50.png" alt="layerseven" className="object-cover"/>
              </div>
            </div>
          </div>
          <div className="w-full bottom-[19%] right-0 left-0 p-2 m-auto md:p-5 border-teal-A100 border-[3px] border-dashed bg-teal-400 shadow-md absolute max-w-[1026px] rounded-[5px]">
            <div className="flex flex-col">
              <div className="flex justify-between w-[30%] md:w-full ml-[262px] gap-5 md:ml-0 z-[1]">
                <Img src="images/img_frame_red_400.svg" alt="image_one" className="h-[34px] w-[34px]" />
                <Img src="images/img_group_deep_purple_400.png" alt="image_two" className="w-[34px] object-cover" />
              </div>
              <Text size="s" as="p" className="mt-[-33px] !text-white-A700 relative leading-[33px]">
                Setting is the time and place of a story. It often answers the questions: when? and where?
              </Text>
            </div>
          </div>
          <div className="flex flex-col w-[6%] gap-[236px] bottom-[13%] right-[0.00px] m-auto md:gap-[177px] sm:gap-[118px] absolute">
            <Img src="images/img_group_53.png" alt="image_three" className="object-cover" />
            <Img src="images/img_forward.png" alt="forward_one" className="h-[77px] object-cover" />
          </div>
          <div className="flex flex-col w-[6%] gap-[237px] bottom-[10%] left-[0.00px] m-auto md:gap-[177px] sm:gap-[118px] absolute">
            <Img src="images/img_television.svg" alt="television_one" className="h-[37px]" />
            <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[54px]" />
            <Img src="images/img_settings_gray_900.svg" alt="settings_one" className="h-[60px]" />
          </div>
          <Img
            src="images/img_fun_fox_logo_01.png"
            alt="funfoxlogoone"
            className="h-[111px] w-[13%] left-[0.00px] top-[0.00px] m-auto object-cover absolute"
          />
          <div className="flex flex-col items-start w-full top-[10%] right-0 left-0 m-auto md:p-5 absolute max-w-[1038px]">
            <Text size="md" as="p">
              Can you figure out the definition of setting from the following examples?
            </Text>
            <Text size="s" as="p" className="mt-[-25px] relative">
              (take a minute to think about this)
            </Text>
          </div>
          <Img
            src="images/img_group_61.png"
            alt="image_four"
            className="h-[122px] w-[7%] right-[0.00px] top-[12%] m-auto object-cover absolute"
          />
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import '../../styles/week1_style.css'
import { useNavigate } from "react-router-dom"; // Import useHistory hook

/*import { handleImageClick } from "./index1";*/

export default function WeekOnePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Define handleImageClick function
  const handleImageClick = () => {
    // Navigate to the WeekTwo route ("/weektwo")
    navigate("/weektwo");
  };
  return (
    <>
      <Helmet>
        <title>FigmaDesign</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[834px] w-full md:h-auto bg-white-A700 relative">
        <div className="flex flex-col items-start w-full">
          <div className="flex items-start w-[25%] md:w-full md:p-5 z-[1]">
            <Img src="images/img_fun_fox_logo_01.png" alt="funfoxlogoone" className="w-[50%] object-cover" id="logoID" />
            {/* <Img src="images/week.png" alt="" id="imgsettingsID"/> */}
            {/* <div style={{ position: 'relative', display: 'inline-block' }}>
  <Img src="images/week.png" alt="" id="imgsettingsID" />
  <span style={{ position: 'absolute', top: '100%', left: '170%', transform: 'translate(-50%, -50%)', color: 'blue', fontSize: '18px' }}>week 1</span>
</div> */}
<div style={{ position: 'relative', display: 'inline-block' }}>
  <Img src="images/week.png" alt="" id="imgsettingsID" />
  
</div>

      
            <div className="flex items-center h-[41px] w-[50%] md:h-auto mt-3 ml-[-5px] relative bg-[url(/public/images/img_group_1180.svg)] bg-cover bg-no-repeat">
              <div className="flex items-center h-[39px] w-full md:h-auto bg-[url(/public/images/img_group_6.svg)] bg-cover bg-no-repeat">
                <div className="flex self-start items-start ml-0.5 gap-2.5 md:ml-0">
                  <img src="images/week.png" alt="" id="imgsettingsID"/>
                  {/* { <Img src="images/week.png" alt="settings_one" className="h-[12px] w-[13px]" id="imgsettingsID" style={{ marginRight: '150px' }} /> } */}
                 
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[834px] mt-[-111px] py-3 relative bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat">
            <div className="h-[635px] w-[93%] right-[0.00px] bottom-0 top-0 my-auto absolute">
              <div className="flex flex-col items-end w-[8%] h-max gap-[169px] right-[0.00px] bottom-0 top-0 my-auto md:gap-[126px] sm:gap-[84px] absolute">
                <Img src="images/img_group_61.png" alt="image" className="h-[122px] w-full md:h-auto object-cover" />
                <div className="flex flex-col w-[84%] md:w-full gap-[185px] md:gap-[138px] md:p-5 sm:gap-[92px]">
                  <Img src="images/img_thumbs_up_gray_900.png" alt="thumbsup_one" className="h-[73px] object-cover" />
                  <Img src="images/img_forward.png" alt="forward_one" className="h-[77px] object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-center w-[95%] h-max left-[0.00px] bottom-0 top-0 my-auto absolute">
                <div className="flex justify-center w-[50%] md:w-full md:p-5 border-pink-100 border-[3px] border-dashed bg-pink-300 shadow-xs rounded-[22px]">
                  <Text size="md" as="p" className="self-end !text-white-A700 text-center">
                    Elements of Story Writing
                  </Text>
                </div>
                <Text size="s" as="p" className="mt-2.5 tracking-[-1.44px] leading-[29px]">
                  <>
                    Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
                    <br />
                    Over the next week, we will be practicing the different elements of story writing.
                    <br />
                    Ouraim is to make stories more interesting and exciting.
                  </>
                </Text>
                <div className="self-stretch h-[131px] w-full mt-[11px] md:p-5 relative max-w-[1026px]" >
                  <div className="flex w-full top-[2.00px] right-0 left-0 p-2.5 m-auto border-teal-A100 border-[3px] border-dashed bg-teal-400 shadow-md absolute rounded-[5px]" style={{ marginRight: '-790px' }}>
                    <div className="flex flex-col items-start w-[87%] md:w-full mb-[25px] ml-[3px] md:ml-0" >
                      <Text size="s" as="p" className="ml-[137px] md:ml-0 !text-white-A700 z-[1]">
                        five
                      </Text>
                      <Text size="s" as="p" className="mt-[-29px] !text-white-A700 relative leading-[29px]">
                        There are elements which make the foundation for story writing. An element is an essential part
                        of something and every fiction story has the same key elements:
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_group_925.svg"
                    alt="image_one"
                    className="h-[131px] right-[-780.00px] bottom-0 top-0 my-auto absolute"
                    marginRight='-790px'
                  />
                </div>
                <div className="flex md:flex-col self-stretch items-start w-full mt-0.5 md:p-5 z-[1] max-w-[1023px]" >
                  <div className="md:self-stretch h-[101px] md:w-full md:h-auto flex-1 relative md:flex-none" style={{right:'-710px'}}>
                    <Img src="images/img_group.svg" alt="image_two" className="h-[100px]" />
                    <Text
                      as="p"
                      className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-black-900 uppercase text-center absolute"
                    >
                      Setting
                    </Text>
                  </div>
                  <div className="md:self-stretch h-[108px] md:w-full md:h-auto ml-[23px] md:ml-0 flex-1 relative md:flex-none" style={{right:'-750px'}}>
                    <Img src="images/img_group_gray_500_01.svg" alt="image_three" className="h-[108px]" />
                    <Text
                      as="p"
                      className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-black-900 text-center absolute"
                    >
                      CHARACTERS
                    </Text>
                  </div>
                  <div className="md:self-stretch h-[101px] md:w-full md:h-auto ml-[26px] md:ml-0 flex-1 relative md:flex-none" style={{right: '-770px'}}>
                    <Img src="images/img_group.svg" alt="image_four" className="h-[100px]" />
                    <Text
                      as="p"
                      className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-black-900 text-center absolute"
                    >
                      PLOT
                    </Text>
                  </div>
                  <div className="md:self-stretch h-[105px] md:w-full md:h-auto ml-[23px] md:ml-0 flex-1 relative md:flex-none" style={{ right: '-780px' }}>
                    <Img src="images/img_group_gray_500_01_105x175.svg" alt="image_five" className="h-[105px]" />
                    <Text
                      as="p"
                      className="w-[85%] top-[28.00px] right-0 left-0 m-auto !text-black-900 text-center leading-5 absolute"
                    >
                      <>
                        PROBLEM
                        <br />
                        OR
                        <br />
                        CONFLICT
                      </>
                    </Text>
                  </div>
                  <div className="h-[124px] w-[23%] md:w-full md:h-auto ml-1.5 p-3 md:ml-0 relative" style={{ right: '-850px' }}>
                    <Img src="images/img_group_gray_500_01.svg" alt="image_six" className="h-[99px]"  />
                    <Text as="p" className="w-max top-[38%] right-0 left-0 m-auto !text-black-900 text-center absolute">
                      RESOLUTION
                    </Text>
                  </div>
                </div>
                <Text size="s" as="p" className="mt-[-4px] relative leading-[29px]">
                  You must be familiar with some of these. If not, do not worry! we will cover all these elements as we
                  go along.
                </Text>
                <div className="self-stretch w-full md:p-5 bg-pink-300 shadow-sm max-w-[1025px] rounded-[20px]" style={{ position: 'relative', right: '-850px' }}>
                  <div className="flex items-start h-[122px] md:h-auto mb-[5px] p-[13px] bg-[url(/public/images/img_group_5.png)] bg-cover bg-no-repeat" style={{ position: 'relative', right: '-5px' }}>
                    <Text size="s" as="p" className="w-[96%] mb-2 leading-[29px]">
                      <>
                        For today’s lesson, we will try to understand and practice writing the setting for our stories.
                        <br />
                        The setting is an important element of every fiction story.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full pl-[447px] bottom-[12.00px] right-0 left-0 gap-5 m-auto md:pl-5 md:p-5 absolute max-w-[1064px]" >
              <div className="flex self-end justify-center items-center w-[29%] gap-[11px]">
                <Img src="images/img_layer_7.svg" alt="layerseven_one" className="h-[45px]" />
                <div className="border-purple-50 border border-solid bg-pink-800 flex-1 rounded-lg">
                  <div className="flex justify-center items-center gap-[26px] bg-pink-400_01 rounded-lg">
                    <Text as="p" className="!text-white-A700 text-center">
                      1
                    </Text>
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[5px]" />
                  </div>
                </div>
                {/* <Img src="images/img_layer_7_purple_50.png" alt="layerseven" className="object-cover" style={{ width: '40px', height: '40px' }}/>  */}
                {/* <Img
                src="images/img_layer_7_purple_50.png"
                alt="layerseven"
                className="object-cover"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                onClick={() => handleImageClick()}
                /> */}
               <Img
          src="images/img_layer_7_purple_50.png"
          alt="layerseven"
          className="object-cover"
          style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          onClick={handleImageClick} // Call handleImageClick function on click
        />
                
              </div>
              <Img src="images/img_user.svg" alt="user_one" className="h-[48px] w-[48px]" />
            </div>
            <div className="flex flex-col w-[6%] h-max gap-[237px] left-[0.00px] bottom-0 top-0 my-auto md:gap-[177px] sm:gap-[118px] absolute">
              <Img src="images/img_television.svg" alt="television_one" className="h-[37px]" />
              <Img src="images/img_thumbs_up.svg" alt="thumbsup_three" className="h-[54px]" />
              <Img src="images/img_settings_gray_900.svg" alt="settings_three" className="h-[60px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start h-[48px] w-[4%] md:h-auto bottom-[12.00px] left-[5%] p-0.5 m-auto bg-[url(/public/images/img_contrast.svg)] bg-cover bg-no-repeat absolute">
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
      </div>
    </>
  );
}

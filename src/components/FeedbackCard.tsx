import { quotes } from "../assets"


interface props {
  // id : string ,
  content : string ,
  name : string ,
  title : string ,
  img : string ,
  
}

const FeedbackCard = ({content , name , title ,img} : props) => {
  return (
    <div className="flex justify-between flex-col px-12 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card">
      <img src={quotes} alt="q" className="w-[40px] h-[27px] object-contain my-5"  />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-20">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt="" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">{name}</h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
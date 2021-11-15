import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyProcessCard({ data, interview , corpName, jobtitle
,intv1Start,intv2Start,intv1End,intv2End}) {
  console.log('data 확인용', data)
  console.log('corpName', corpName)
  const [jobdata, setJobdata] = useState("");
//   const [intv1Start, setItv1start] = useState("");
//   const [intv2Start, setItv2start] = useState("");
//   const [intv1End, setItv1End] = useState("");
//   const [intv2End, setItv2End] = useState("");
  const [loading, setLoading] = useState(true);
//   console.log('jobstitle', jobTitle)
  useEffect(()=> {
      fetch(
          `/job-service/jobs/${data.jobsNo}`
      )
      .then((res)=>{
          return res.json();
      })
      .then((data2)=>{
          console.log("공고내용", data2);
          setJobdata(data2.jobsTitle);
        //   setItv1start(data2.intv1Start);
        //   setItv1End(data2.intv1End);
        //   setItv2start(data2.intv2Start);
        //   setItv2End(data2.intv2End);
        //   console.log("jobtitle", jobdata)
        //   setCorpname(d)
        
          return data2.jobsTitle;
      });
  }, []);
  console.log("공고명", jobdata);
  console.log(interview)

    if(!data.writtenResult){
        return(<div>안녕하세요 {corpName} 입니다.<br></br> 
            먼저 {jobtitle}에 지원해주셔서 감사합니다.<br></br>
             필기전형 진행중 입니다.</div>)
    }
    else{
        if (data.writtenResult==="P"){
            if(!interview.firstInterviewResult){
                return(
                    <div>안녕하세요 {corpName} 입니다.<br></br> 
                    먼저 {jobtitle}에 지원해주셔서 감사합니다.<br></br>
                     필기전형 합격하였습니다.<br></br>
                     1차 면접 예정일은 
                     {intv1Start ? intv1Start.substring(0,10): ""} -
                     {intv1End ? intv1End.substring(0,10): ""} 입니다 <br></br>
                    구체적인 면접전형 일자는 추후에 공지하겠습니다</div>
                );
            }
            else {
                if(interview.firstInterviewResult==="F"){
                    return(<div>안녕하세요 {corpName} 입니다. 
                        먼저 {jobtitle}에 지원해주셔서 감사합니다.
                         면접 1차 전형에서 불합격하셨습니다</div>)
                }
                else{
                    if(!interview.secondInterviewResult){
                        return(<div>안녕하세요 {corpName} 입니다. 
                            먼저 {jobtitle}에 지원해주셔서 감사합니다.
                             1차 면접 합격하였습니다<br/>
                             2차 면접 예정일은 {intv2Start ? intv2Start.substring(0,10): ""} -
                     {intv2End ? intv2End.substring(0,10): ""} 입니다<br/>
                     구체적인 면접전형 일자는 추후에 공지하겠습니다
                        </div>);
                    }
                    else{
                        if(interview.secondInterviewResult==="P"){
                            return(<div> 안녕하세요 {corpName} 입니다. 
                            먼저 {jobtitle} 에 지원해주셔서 감사합니다.
                             최종 면접 합격하셨습니다. 진심으로 축하드립니다! </div>);
                        }
                        else{
                            return(<div>안녕하세요 {corpName} 입니다. 
                                먼저 {jobtitle}에 지원해주셔서 감사합니다.
                                 최종 면접 불합격하셨습니다</div>);
                        }
                    }
    
                }
            }
        }
        else {
            return(
                <div>
                    안녕하세요 {corpName} 입니다. 
                            먼저 {jobtitle}에 지원해주셔서 감사합니다.
                              안타깝게도 서류전형에서 불합격하셨습니다. 
                    {data.applyNum}
                    {data.writtenResult}
                </div>
            );
        }
    }
    
  
}

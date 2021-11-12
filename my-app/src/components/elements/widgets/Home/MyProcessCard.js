import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyProcessCard({ data, interview }) {
  console.log(data)
  console.log(interview)
    if(!data.writtenResult){
        return(<div>필기전형 진행중 입니다.</div>)
    }
    else{
        if (data.writtenResult==="P"){
            if(!interview.firstInterviewResult){
                return(
                    <div>필기전형 합격하였습니다.<br></br>
                    면접전형 일자를 추후에 공지하겠습니다</div>
                );
            }
            else {
                if(interview.firstInterviewResult==="F"){
                    return(<div>면접 1차 전형에서 불합격하셨습니다</div>)
                }
                else{
                    if(!interview.secondInterviewResult){
                        return(<div>1차 면접 합격하였습니다
                            2차 면접 일정을 추후에 공지하겠습니다.
                        </div>);
                    }
                    else{
                        if(interview.secondInterviewResult==="P"){
                            return(<div>최종 면접 합격하셨습니다</div>);
                        }
                        else{
                            return(<div>최종 면접 불합격하셨습니다</div>);
                        }
                    }
    
                }
            }
        }
        else {
            return(
                <div>
                    안녕하세요 안타깝게도 서류전형에서 불합격하셨습니다. 
                    {data.applyNum}
                    {data.writtenResult}
                </div>
            );
        }
    }
    
  
}
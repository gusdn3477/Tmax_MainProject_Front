import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyProcessCard({ data, interview, corpName, jobtitle
    , intv1Start, intv2Start, intv1End, intv2End }) {
    console.log('data 확인용', data)
    console.log('corpName', corpName)
    const [jobdata, setJobdata] = useState("");
    const [loading, setLoading] = useState(true);
    const [data2, setData2] = useState();

    useEffect(() => {
        fetch(`/job-service/jobs/${data.jobsNo}`)
            .then((res) => {
                return res.json();
            })
            .then((data2) => {
                console.log("공고내용", data2);
                setJobdata(data2.jobsTitle);
                return data2.jobsTitle;
            });

        if (localStorage.getItem('userId')) {
            fetch(`/user-service/users/${localStorage.getItem('userId')}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData2(data);
                    console.log(data);
                    setLoading(false);
                })
        }

    }, []);
    console.log("공고명", jobdata);
    console.log(interview)

    if (loading)
        return (
            <div class="spinner-border text-primary" role="status"></div>
        );

    if (!data.writtenResult) {
        return (<div>안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
            먼저 <b>{jobtitle} 공고</b>에 지원해 주신 것에 감사의 말씀 드립니다.<br></br>
            <b>{data2.name}</b>님은 현재 필기전형 진행중이며, 결과가 나오는 대로 알려드리겠습니다.</div>)
    }
    else {
        if (data.writtenResult === "P") {
            if (!interview.firstInterviewResult) {
                return (
                    <div>안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                        먼저 <b>{jobtitle} 공고</b>에 지원해주셔서 감사합니다.<br></br>
                        축하합니다! <b>{data2.name}</b>님은 필기전형 합격하였습니다.<br></br>
                        1차 면접 예정일은
                        {intv1Start ? intv1Start.substring(0, 10) : ""} -
                        {intv1End ? intv1End.substring(0, 10) : ""} 입니다 <br></br>
                        구체적인 면접전형 일자는 추후에 공지하겠습니다</div>
                );
            }
            else {
                if (interview.firstInterviewResult === "F") {
                    return (<div>안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                        먼저 <b>{jobtitle} 공고</b>에 지원해주셔서 감사합니다.<br></br>
                        <b>{data2.name}</b>님은 안타깝게도, 제한된 인원으로 인하여 1차 면접에서 합격하지 못하셨습니다.</div>
                        )
                }
                else {
                    if (!interview.secondInterviewResult) {
                        return (<div>안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                            먼저 <b>{jobtitle} 공고</b>에 지원해주셔서 감사합니다.<br></br>
                            축하합니다 !<b>{data2.name}</b>님은 1차 면접에 합격하였습니다<br />
                            2차 면접 예정일은 {intv2Start ? intv2Start.substring(0, 10) : ""} -
                            {intv2End ? intv2End.substring(0, 10) : ""} 입니다<br />
                            구체적인 면접전형 일자는 추후에 공지하겠습니다
                        </div>);
                    }
                    else {
                        if (interview.secondInterviewResult === "P") {
                            return (<div> 안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                                먼저 <b>{jobtitle} 공고</b>에 지원해주셔서 감사합니다.<br></br>
                                <b>{data2.name}</b>님은 최종 면접 합격하셨습니다. 진심으로 축하드립니다! </div>);
                        }
                        else {
                            return (<div>안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                                먼저 <b>{jobtitle} 공고</b>에 지원해주셔서 감사합니다.<br></br>
                                <b>{data2.name}</b>님은 안타깝게도, 제한된 인원으로 인하여 최종 면접 불합격하셨습니다</div>);
                        }
                    }

                }
            }
        }
        else {
            return (
                <div>
                    안녕하세요 <b>{data2.name}</b>님, <b>{corpName}</b>입니다.<br></br>
                    먼저 <b>{jobtitle}</b>에 지원해주셔서 감사합니다.<br></br>
                    <b>{data2.name}</b>님은 안타깝게도 서류전형에서 불합격하셨습니다.
                    {data.applyNum}
                    {data.writtenResult}
                </div>
            );
        }
    }


}

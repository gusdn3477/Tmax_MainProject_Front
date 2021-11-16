import { useEffect, useState } from "react";

export default function ChangeJobString(jobsNo) {
    // const jobsNo2 = jobsNo;
    const [jobsNo2,setJobsNo2] = useState("");
    useEffect(()=> {
        fetch(`/job-service/jobs/${jobsNo}`)
        .then(res=>{
            return res.json();
        })
        .then(data => {
            setJobsNo2(data.jobsTitle)
        });
    });


    return jobsNo2;

}


// export function ApplyNumString(applyNum){
    // const [name, setName] = useState("")
    // console.log("apno",applyNum);
    // useEffect(()=> {
    //     fetch(`/user-service/users/applys/${applyNum}`)
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data => {
    //         setName(data.applyName)
    //     });
    // });
//     return name;
// }
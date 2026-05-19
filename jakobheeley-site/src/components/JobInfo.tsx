type JobInfoProp = {
    jobdata: {
        company: string;
        startEnd: string;
        jobTitle: string;
    };
}

export default function JobInfo({jobdata}: JobInfoProp){
    return(
        <>
        <div className="flex flex-col md:flex-row justify-between font-bold">
            <span>{jobdata.company}</span>
            <span>{jobdata.startEnd}</span>
        </div>
        <span className="font-bold">{jobdata.jobTitle}</span>
        </>
    );
}
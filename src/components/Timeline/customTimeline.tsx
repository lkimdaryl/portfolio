import {
    Timeline,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ScienceIcon from '@mui/icons-material/Science';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import workExperience from "./work-exp.json";
import './customTimeline.css'
import BasicModal from '../Modal/modal'
import {useState} from 'react'

const icons = [LaptopMacIcon, ScienceIcon, AccountBoxIcon, PaidIcon];

interface CustomTimelineProps {
    pos: "left" | "right" | "alternate" | "alternate-reverse";
}

const CustomTimeline = ({ pos }: CustomTimelineProps) => {

    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<any>(null);

    function handleOpen(job: any) {
        setOpen(true);
        setSelectedJob(job)
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedJob(null);
    };

    return (
        <Timeline position={pos} id="customtimeline-container">
            {Object.entries(workExperience).map(([company, details], index) => {
            const IconComponent = icons[index % icons.length]; // Rotate through available icons
            return (
                <TimelineItem key={company}>
                    <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align={index % 2 === 0 ? "right" : "left"}
                    variant="body2"
                    color="white" >
                        {details.start_date} - {details.end_date}
                    </TimelineOppositeContent>

                    <TimelineSeparator style={{ minHeight: "100%" }}>
                        <TimelineConnector />
                        <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"}>
                        <IconComponent />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                    sx={{ py: "12px", px: 2 }} 
                    className="content-container" 
                    onClick={() => handleOpen({company, ...details})}>
                        <Typography variant="h6" component="span"><strong>{details.title}</strong></Typography>
                        <Typography>{company}</Typography>
                        <Typography>{details.location}</Typography>
                    </TimelineContent>
                    <BasicModal open={open} handleClose={handleClose} job={selectedJob} />
                </TimelineItem>
            );
            })}
        </Timeline>
    );
};

export default CustomTimeline;

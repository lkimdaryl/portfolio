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
import RepeatIcon from "@mui/icons-material/Repeat";
import workExperience from "./work-exp.json";
import './customTimeline.css'

const icons = [LaptopMacIcon, RepeatIcon];

interface CustomTimelineProps {
    pos: string;
    toc: boolean;
}

const CustomTimeline = ({ pos, toc }: CustomTimelineProps) => {

    return (
        <Timeline position={pos} id="timeline-container">
            {Object.entries(workExperience).map(([company, details], index) => {
            const IconComponent = icons[index % icons.length]; // Rotate through available icons
            return (
                <TimelineItem key={company}>
                  {toc ? (
                    <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align={index % 2 === 0 ? "right" : "left"}
                    variant="body2"
                    color="white"
                    >
                    {details.start_date} - {details.end_date}
                    </TimelineOppositeContent>
                ) : (
                    <TimelineOppositeContent 
                    style={{width: '0', height: 'auto'}}/>
                )}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color={index % 2 === 0 ? "primary" : "secondary"}>
                    <IconComponent />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }} className="content-container">
                    <Typography variant="h6" component="span">
                    {details.title}
                    </Typography>
                    <Typography>
                    <strong>{company}</strong> - {details.location} {toc ? '' : `| ${details.start_date} - ${details.end_date}`}
                    </Typography>
                    <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                    {details.responsibilities.map((task, idx) => (
                        <li key={idx}>{task}</li>
                    ))}
                    </Typography>
                    {details.achievements && (
                        <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        {details.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </Typography>
                    )}
                </TimelineContent>
                </TimelineItem>
            );
            })}
        </Timeline>
    );
};

export default CustomTimeline;

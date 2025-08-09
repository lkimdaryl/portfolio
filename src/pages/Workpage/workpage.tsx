import './workpage.css'
import SectionWrapper from '../../components/hoc/section-wrapper'
import CustomTimeline from '../../components/Timeline/customTimeline.tsx'
import { useEffect, useState } from 'react'
const Work = () => {

  const [timelinePosition, setTimelinePosition] = useState<"right" | "alternate">("alternate");
  const [TOC, setTOC] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setTimelinePosition("right");
        setTOC(false);
      } else {
        setTimelinePosition("alternate");
        setTOC(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='work-container'>
        <div id='work-exp'>
            <h4>What I have done so far</h4>
            <h1>Work Experience.</h1>
        </div>
        <div id='customtimeline-container'>
            <CustomTimeline pos={timelinePosition} />
        </div>
    </div>
  )
}

export default SectionWrapper(Work)
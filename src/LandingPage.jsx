import React from "react";
import Navbar from "./Nav";
import img from "./assets/avatar.jpg"
import NewsCard from "./NewsCard";
import EventCard from "./EventCard";
import JobCard from "./JobCard";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.avif"
const LandingPage=()=>{
    return (
        <>
            <Navbar/>
            <div className="landing_display">
                <div className="newsFeeds">
                    <div className="flex account" >
                    <img src={img} className="avatar"></img>
                    <div>
                    <h3>Vladimir Raksha</h3>
                    <h4>Memeber</h4>
                    </div>
                    </div>
                    <div>
                    <h1>News Feeds</h1>
                    <NewsCard img={img1} domain="Tourism" text="Tourism is a social, cultural and economic "/>
                    <NewsCard img={img1} domain="Tourism" text="Tourism is a social, cultural and economic "/>
                    <NewsCard img={img1} domain="Tourism" text="Tourism is a social, cultural and economic "/>
                    <NewsCard img={img1} domain="Tourism" text="Tourism is a social, cultural and economic "/>
                    <NewsCard img={img1} domain="Tourism" text="Tourism is a social, cultural and economic "/>

                </div>
                </div>
                <div className="Events">
                    <h1>Upcoming Events</h1>
                    <EventCard img={img2}/>
                    <div className="flex height_ space">
                    <EventCard img={img2}/>
                    <EventCard img={img2}/>
                    </div>
                </div>
                <div className="Job">
                    <h1>Job Postings</h1>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                    <JobCard/>
                </div>
            </div>
        </>
    )
}
export default LandingPage;
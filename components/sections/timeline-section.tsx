import React from 'react'
import { Timeline } from '../ui/timeline'
export default function TimelineSection() {
    const data = [
        {
          title: "Public Relations Specialist",
          content: (
            <div>
              <p><strong>Enactus Bennett University</strong></p>
              <p>Nov 2022 – Sep 2023 &middot; 11 mos</p>
              <p><em>Public Affairs and Strategic Public Relations Planning</em></p>
              <p><em>Certificate of Recognition</em></p>
            </div>
          )
        },
        {
          title: "PR and Outreach Head",
          content: (
            <div>
              <p><strong>Enactus Bennett University</strong></p>
              <p>Sep 2023 – May 2024 &middot; 9 mos</p>
              <p>Noida, Uttar Pradesh, India &middot; On-site</p>
              <p>It&apos;s gives me immense pleasure everytime I look at where I am working, Enactus is serving the world, its environment, societies and humanity.</p>
              <p>It is making it a bit better every day by finding entrepreneurial solutions to the most difficult problems.</p>
            </div>
          )
        },
        {
          title: "Joint Secretary",
          content: (
            <div>
              <p><strong>Financo.bu</strong></p>
              <p>Sep 2023 – May 2024 &middot; 9 mos</p>
              <p>Bennett University &middot; On-site</p>
              <p>Being a founding member and Joint Secretary of Bennett University&apos;s Financial and Consulting club - Financo, me and my team work on getting better every day, making better financial and life decisions and aim to make financial knowledge available to myriads of individuals.</p>
              <p>We don&apos;t advise people on what to invest in but we work to make them able enough that they can choose what is better for them to invest in. We work on making everyone financially literate and independent.</p>
            </div>
          )
        },
        {
          title: "Freelance",
          content: (
            <div>
              <p><strong>Freelancer.com</strong> &middot; Part-time</p>
              <p>Jan 2025 – Present &middot; 4 mos</p>
              <p>Remote</p>
              <p><em>Next.js, Back-End Web Development and +7 skills</em></p>
            </div>
          )
        }
    ];
      
  return (
    <div id='timeline'>
      <Timeline data={data} />
    </div>
  )
}

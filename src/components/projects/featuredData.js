
import P1 from '../../assets/project1.webp'
import P2 from '../../assets/project2.webp'

export const FeaturedData = [
    {
        image: P1,
        title: "UniDash",
        demo: "https://github.com/Idiotcodes/unidash",
        github: "https://github.com/Idiotcodes/unidash",
        details: 'A college dashboard made using SpringBoot and MYSQL. This dashboard have various features like seperate login system for teacher and students. student enrolment, course details, college details, etc..', 
        tech: [ 'SpringBoot', 'CSS3', 'MySQL', 'Apache Tomcat', 'Java']
    },
    {
        image: P2,
        title: "MeetShort",
        demo: "https://github.com/Idiotcodes/meetshort",
        github: "https://github.com/Idiotcodes/meetshort",
        details: "MeetShort is a meeting summarizer made using various AI models. MeetShort will extract audio from a video, convert it to a text transcript, summarize it and finally generate a keynote about the transcript. MeetShort can individually identify speakers",
        tech: [ 'OpenAI Whisper', 'PyAnote', 'Gemini', 'Bart-CNN', 'Python']
    },

];


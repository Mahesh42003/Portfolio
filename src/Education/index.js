import {Chrono} from 'react-chrono'
import './index.css'

const EducationData=[{
    Degree:"10th",
    Year:"2017-2018",
    SchoolName:"Gitams High School",
    place:"Vinukonda,India",
},
{
    Degree:"Intermediate",
    Year:"2018-2021",
    SchoolName:"Sri Chaitanya Junior College",
    place:"Vijayawada,India",
},
{
    Degree:"B.Tech",
    Year:"2020-2024",
    SchoolName:"Sri Venkateawara College Of Engineering And Technology",
    place:"Chittoor,India"
}]

const Education=() => (
    <div>
        <h1 className='Education-heading'>Education</h1>
        <hr className='horizontal-width'/>
        <Chrono items={EducationData} mode="VERTICAL_ALTERNATING" cardHeight="350" disableToolbar="true" theme={{
            primary: "orange",
            secondary: "blue",
            cardBgColor: "white",
            cardForeColor: "violet",
            titleColor: "red",
        }} className="margin-left-chrono-width"> 
            {
                EducationData.map(each => 
                    <>
                    <p className='education-data'>{each.Year}</p>
                    <p className='education-data'>{each.Degree}</p>
                    <p className='education-data'>{each.SchoolName}</p>
                    <p className='education-data'>{each.place}</p>
                    </>
                )
            }
        </Chrono>
    </div>
)  
export default Education

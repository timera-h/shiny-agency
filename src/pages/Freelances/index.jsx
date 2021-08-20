import DefaultPicture from '../../assets/default_image.jpg';
import Card from '../../components/Card';
import styled from 'styled-components';


const CardContainer = styled.div `
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    }
]

function Freelances() {
    return(
        <div>
           <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1> 
           <CardContainer>
           {freelanceProfiles.map((profile, index) => (
               <Card 
               key={`${profile.name}-${index}`}
               label={profile.jobTitle}
               picture={profile.picture}
               title={profile.name}
               />
           ))}
           </CardContainer>
        </div>
    )
}

export default Freelances;
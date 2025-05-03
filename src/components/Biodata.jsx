

const BioData = (props) => {

    return(
        <div className='bio-data'>
        <h2>BioData Of {props.name}</h2>
        <div className='personal-info'>
          <p>
            <strong>Email :</strong> {props.email}
          </p>
          <p>
            <strong>Phone : </strong> {props.phone}
          </p>
         
        </div>

        <div className='skills'>
          <h2>My Skills : </h2>
          <ul>
            {props?.skills?.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className='social-links'>
          <h2>My Social Medias</h2>
          <ul>
            {props?.socialLinks?.map(socialLink => (
                <li>
                    <strong>{socialLink.platformName}</strong>{socialLink.handle}
                </li>
            ))}
          </ul>
        </div>


      </div>

    );
};
export default BioData;
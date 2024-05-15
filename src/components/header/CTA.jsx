import resume from '../../assets/resume.pdf'
import { handleNavItemClick } from '../../utility/NavUtility'

const CTA = () => {

  return (
    <div className='cta' data-aos="fade-up">
      <a href={resume} className='btn' target='_blank' rel="noreferrer" aria-label='Open this link to view my resume'>
          Resumé
        <span className='running-light'></span>
        <span className='running-light'></span>
        <span className='running-light'></span>
        <span className='running-light'></span>
        </a>
      <a href="#contact" 
        className='btn btn-primary'
        onClick={(e) => handleNavItemClick(e, 'contact')}
        aria-label='Open this link to contact me'
      >
        Let's Talk
      </a>
    </div>
  )
}

export default CTA

import './ServiesHome.css'

export default function ServiesHome({icon,title, Discrpation}) {
  return (
    <div className='Hm-card '>
        <img src={icon} alt=""/>
        <h4>{title}</h4>
        <p>{ Discrpation}</p>
        <button>Read more</button>
    </div>
  )
}
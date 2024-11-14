import './ServiesHome.css'

export default function ServiesHome({icon,title,pargraph}) {
  return (
    <div className='Hm-card '>
        <img src={icon} alt="Woo Commerce"/>
        <h4>{title}</h4>
        <p>{pargraph}</p>
        <button>Read more</button>
    </div>
  )
}

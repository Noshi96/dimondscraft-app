import RootComponent from '../components/RootComponent'
import HomeComponent from '../components/HomeComponent'

export default function Home() {
  return (
    <div className='container'>
      <RootComponent>
        <HomeComponent />
      </RootComponent>
    </div>
  )
}

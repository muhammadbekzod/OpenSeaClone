import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/client'
import Header from '../components/Home/Header'
import Hero  from '../components/Home/Hero'
import toast, {Toaster} from 'react-hot-toast'


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}


export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toast.success(
    `Welcom back ${userName == 'Unnamed' ? `${userName}`: ''}!`,
    {
      style:{
        background: '#04111d',
        color: '#fff',
      }
    }
    )
  }


  useEffect(()=> {
    if(!address) return
    ;(async()=>{
      const userDoc ={
        _type:'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      const result = await client.createIfNotExists(userDoc)
      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position='top-center' reverseOrder={false}/>
      {address ?(
  <div className='flex flex-col '>
  <Header />
  <Hero />
  </div>
      ):(

        <div className={style.walletConnectWrapper}>
        <button
          className={style.button}
          onClick={()=> connectWallet('injected')}
        >
          Connect Wallet
        </button>
        <div className={style.details}>
          Texting something
         </div> 
         </div>

      )}
  </div>
  )
}


import { useWeb3 } from '@3rdweb/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useMemo } from 'react';
import {ThirdwebSDK} from '@3rdweb/sdk'
import Header from '../../components/Home/Header'
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineVerified } from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import { HiDotsVertical } from 'react-icons/hi'
import CardControl from '../../components/card/controller';

const style = {
  bannerImageContainer: `h-[12rem]  w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-black `,
  endRow: `w-full flex justify-end text-gray `,
  profileImg: `w-40 h-40 object-cover rounded-full border-4 border-lightgray mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container cursor-pointer justify-between items-center text-[1.6rem] border-2 rounded-lg px-4`,
  socialIcon: `my-2 `,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4  rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}



const Explore = () => {
    const router = useRouter()
    const {provider} = useWeb3()
    const { collectionId } = router.query
    const [ collection, setCollection ] = useState({})
    const [nfts, setNfts] = useState([])
    const [listings, setListings] = useState([])

//

  const nftModule = useMemo(()=>{
    if (!provider) return
    
    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/Eb3omxynw9q0dSPMrOGU3w--lTygXSWn'
    )
    return (collectionId)
  }, [provider])

  useEffect(()=>{
    if(!nftModule) return
    ;(async ()=>{
      const nfts = await nftModule.getAll()

      setNfts(nfts)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(()=>{
    if(!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/Eb3omxynw9q0dSPMrOGU3w--lTygXSWn'
    )
    return sdk.getMarketplaceModule(
      '0xec5a98b7044aC3A1B4d48788796a2AD5AC863278'
    )
  }, [provider])


  useEffect(()=>{
    if(!marketPlaceModule)return
    ;(async ()=> {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])



  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`
    const collectionData = await sanityClient.fetch(query)

    console.log(collectionData, '1')
    await setCollection(collectionData[0])

  }
    console.log(router.query);
    console.log(router.query.exploreID);
  return (
    <div className='overflow-hidden'>
      <Header className="sticky top-0 z-10  bg-white"/>
      <div className={style.bannerImageContainer}>
        <img 
        className={style.bannerImage}
        src={
          collection?.bannerImageURl
          ? collection.bannerImageURl
          : 'https://lh3.googleusercontent.com/LkkMZIONLcKnqkzI-J17FZlXBkmnmDH2unCJ6o_blsjrRvINYJ7XySH7wg3xsJ78WTyQpGhgqWSCt5ytQkfE67M-Cyfy4xlXuqjQW4Y=w1400-k'

        }
        alt="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img 
          className={style.profileImg}
          src={
            collection?.imageURl
            ? collection.imageURl
            :'https://lh3.googleusercontent.com/AX_uuKN-OFhtHXtzw5PJ3K-bGW5tg2svacBEv8xO_ii3UCEo6UTjqec4MiXFGP3gsxPD-p-W0d315pEvIOxG3pKNWfT3G8KvAgIl=s130'
          }
          alt="profile image"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon} />
                  <AiOutlineInstagram />
                  <div className={style.divider} />
                <div className={style.socialIcon} />
                  <AiOutlineTwitter/>
                  <div className={style.divider} />
                <div className={style.socialIcon} />
                  <HiDotsVertical />
              </div>

            </div>

          </div>

        </div>
        
        <div className={style.midRow}>
        <div className={style.title}>{collection?.title}</div>
      </div>
     
      <div className={style.midRow}>
        <div className={style.createdBy}>
          Created by{''}
          <span className='text-[#2081e2] ml-1 cursor-pointer'>{collection?.creator}Muhammad</span>
        </div>
      </div>
      <div>
      <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>{nfts.length}</div>
              <div className={style.Name}>items</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {collection?.allOwners ?  collection.allOwners.length: ''}
              </div>
              <div className={style.collectionStat}>
                <img
                src='https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'
                alt="coin"
                className={style.ethLogo}
                />
                {collection?.floorPrice}
              </div>
              <div className={style.statsContainer}>floor price</div>
            </div>

            <div className={style.collectionStat}>
              <div className={style.statValue}>
              <img
                  src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                  className={style.ethLogo}
                />
                {collection?.volumeTraded}.5K
              </div>
              <div  className={style.statName}>volume traded</div>
            </div>

          </div>
      </div>
      </div>
      <div className={style.midRow}>
        <div className={style.description}>{collection?. description}</div>
      </div>
      </div>
      <div className="flex flex-wrap ">
      <CardControl/>
     
      </div>
    </div>

  )
};

export default Explore;

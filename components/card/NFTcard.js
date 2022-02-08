import React from 'react';


const style = {
  wrapper: `border-solid-gray border-2 flex-auto w-[16rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-0.2rem]`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
}


const NFTcard = ({value}) => {
  return (
      <div className={style.wrapper}>
        <div >
        <img src={value?.card.photo || "Not Availabe"}/>
        </div>
        <div>
        {value?.card?.name ||"Not Available"}
        <p>Best Offer</p>
        </div>
        <div>
        {value?.card?.title ||"Not Available"}
        <p>
        {value?.card?.cost ||"Not Available"}
        </p>
        </div>
        <div>
        {value?.card?.type ||"Not Available"}
        <p>
        {value?.card?.lcost ||"Not Available"}
        </p>
        </div>
      </div>
  )
};
//


export default NFTcard;

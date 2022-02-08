import React from 'react';


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500  before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=w600')] before:bg-cover before:bg-bottom before:opacity-20 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap  `,
    contentBpdyWrapper:`flex mt-[3rem]   justify-evenly`,
    contentWrapperMini:`flex w-1/3 h-2/4  items-center `,
    copyContainer: `justify-center `,
    title: `relative text-black text-[46px] font-semibold`,
    description: `text-[rgb(53, 56, 64)]  text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-2 bg-[#2181e2] rounded-lg mr-5 text-white   hover:bg-[#42a0ff] shadow hover:shadow-xl cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-2 bg-white rounded-lg mr-5 text-[#2181e2] border-solid border-2 border-sky-500 shadow hover:shadow-xl cursor-pointer`,
    cardContainer: `h-3/4 hover hover:shadow-xl cursor-pointer `,
    infoContainer: `h-18 bg-white p-4 rounded-b-lg flex items-center text-white font-semibold`,
    author: `flex flex-col text-black justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
  return (

    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.contentBpdyWrapper}>
                <div className={style.contentWrapperMini}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                    Discover, collect, and sell extraordinary NFTs
                    </div>
                    <div className={style.description}>
                    OpenSea is the world's first and largest NFT marketplace
                    </div>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                    </div>
                </div>
                <div className={style.cardContainer}>
                <img className="rounded-t-lg" src="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=w600" />
                <div className={style.infoContainer}>
                    <img
                    className='h-[2.25rem] rounded-full' 
                    src='https://lh3.googleusercontent.com/XuDfRQtqu8q9sOIW2VkGokR_CEFDxybbmrNG31R8dAEboi4Co5qdn-JUwmtG0S7JYhCnj4wK5rSbi-J6giG8zTXBvE_u8I0ymhRPgA=s80'
                    alt="cartWrap"
                    />
                    <div className={style.author}>
                        <div className={style.name}>ATHENA</div>
                        <a
                        className='text-[#1868b7]'
                        href="#"
                        >
                        animkhitaryan
                        </a>
                    </div>
                </div>
                </div>
        </div>
        </div>
        </div>
     </div>
  )
};

export default Hero;

import Image from 'next/image';
import Link from 'next/Link';
import React from 'react';
import opensealogo from '../../assets/opensea.png'
import {AiOutlineSearch } from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'



const style = {
    container: `sticky top-0 z-10 bg-white`,
    wrapper: ` bg-white w-screen px-[1.1rem] py-[0.8rem] flex shadow-[0_35px_60px_-2px_rgba(0,0,0,0.2)]`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-black font-bold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#fffff] rounded-[0.6rem] border-solid border-2 border-slate-300`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[black] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#808080]  hover:text-black cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-black cursor-pointer`,
}



const Header = () => {
  return (
<div className={style.container}>
  <div className={style.wrapper}>
      <Link  href="/">
      <div className={style.logoContainer}>
          <Image src={opensealogo} height={40} width={40} />
          <div className={style.logoText}>OpenSea</div>
      </div>
      </Link >
    <div className={style.searchBar}>
        <div className={style.searchIcon}>
            <AiOutlineSearch />
        </div>
        <input className={style.searchInput} 
        placeholder="Search items, collections, and accounts"/>
    </div>
    <div className={style.headerItems}>
        <Link href ="/explore/0x11cc76C9F1DFc2F09532D625c0465c85Df908ae3" >
        <div className={style.headerItem}>Explore</div>
        </Link >
        <Link href ="/">
        <div className={style.headerItem}>Stats</div>
        </Link>
        <Link href ="/">
        <div className={style.headerItem}>Resources</div>
        </Link >
        <Link href ="/">
        <div className={style.headerItem}>Create</div>
        </Link >
        <Link href ="/">
        <div className={style.headerIcon}>
        <CgProfile/>
        </div>
        </Link >
       
        <Link href ="/">
        <div className={style.headerIcon}>
        <MdOutlineAccountBalanceWallet/>
        </div>
        </Link>
    </div>    
  </div>
  </div>
  )
};

export default Header;

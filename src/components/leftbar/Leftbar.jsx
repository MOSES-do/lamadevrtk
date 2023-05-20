import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import GroupIcon from '@mui/icons-material/Group'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import MovieIcon from '@mui/icons-material/Movie'
import DateRangeIcon from '@mui/icons-material/DateRange'
import HearingIcon from '@mui/icons-material/Hearing'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";
import { useSelector } from "react-redux"
import { useState, useEffect, useCallback, useRef } from 'react';


export default function Leftbar() {
  const name = useSelector((state) => state.users)
  const [index, setIndex] = useState(0)

  const [tooltipShown, setTooltipShown] = useState(false)

  const tooltipPopperRef = useRef(null);

  const onMouseOver = useCallback(() => setTooltipShown(true), [])
  const onMouseOut = useCallback(() => setTooltipShown(false), [])

  useEffect(() => {
    console.log('Add event listeners');
    tooltipPopperRef.current.addEventListener('mouseover', onMouseOver)
    tooltipPopperRef.current.addEventListener('mouseout', onMouseOut)

    const ref = tooltipPopperRef.current;
    return () => {
      ref.current.removeEventListener('mouseover', onMouseOver)
      ref.current.removeEventListener('mouseout', onMouseOut)
    }
  }, [onMouseOver, onMouseOut])


  const updateIndex = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  let timerID = 0;
  const Timer = () => {
    const [timer, setTimer] = useState(0);



    useEffect(() => {
      timerID++;
      const timerId = setInterval(() => {
        setTimer((currentTime) => {
          console.log(`Timer ${timerID} starts ${currentTime}`)
          return currentTime + 1
        })
      }, 1000)

      return () => {
        console.log("timer clerared")
        clearInterval(timerId)
      }
    }, [])

    return (
      <>
        <div>Timer : {timer} </div>
      </>
    )
  }

  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeIcon />} text="Homepage" />
        <MenuLink icon={<ListIcon />} text="Lists" />
        <MenuLink icon={<ProductionQuantityLimitsIcon />} text="Products" />
        <MenuLink icon={<GroupIcon />} text="Groups" />
        <MenuLink icon={<AutoStoriesIcon />} text="Pages" />
        <MenuLink icon={<PhotoLibraryIcon />} text="Photos" />
        <MenuLink icon={<MovieIcon />} text="Videos" />
        <MenuLink icon={<DateRangeIcon />} text="Schedule" />
        <MenuLink icon={<HearingIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsIcon />} text="Settings" />
        {name && <MenuLink icon={<LogoutIcon />} text="Logout" />}
      </div>
      <>
        <Timer key={index} />
        {index}
        <button onClick={updateIndex}>Update index</button>
        <div ref={tooltipPopperRef}>Tooltip Popper</div>
        {
          tooltipShown && <div><Timer key={index} />
          </div>
        }
      </>
    </div>
  );
}

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

import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";
import { useSelector } from "react-redux"


export default function Leftbar() {
  const name = useSelector((state) => state.user.name)
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
    </div>
  );
}

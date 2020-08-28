import React from 'react'
import { history } from 'umi'
import {isMobile} from "@/utils/utils"

export default (props: any) => {
  const { location, history } = props
  const isMobileUrl = location.pathname.startsWith('/mobile')

  if(isMobile() && !isMobileUrl) {
    history.replace(`/mobile${location.pathname}${location.search}${location.hash}`)
    return <></>
  }
  if(!isMobile() && isMobileUrl) {
    history.replace(`${location.pathname.replace('/mobile', '')}${location.search}${location.hash}`)
    return <></>
  }

  return props.children;
}

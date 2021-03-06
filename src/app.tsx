import React from 'react'
import { history } from 'umi'

// @ts-ignore
export function patchRoutes({routes}) {
  // console.log('routes', routes)
}

// 权限
export function render(oldRender: () => void) {
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) { oldRender() }
  //   else { history.push('/login'); }
  // });
  oldRender()
}

// 设置标题
// @ts-ignore
export function onRouteChange({ matchedRoutes }) {
  if (matchedRoutes.length) {
    // console.log(matchedRoutes)
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || 'AEX';
  }
}

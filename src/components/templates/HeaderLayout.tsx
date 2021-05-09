import {memo, VFC} from "react";

import { Header } from "../organisms/layout/Header"

type Props = {
  children;
}

export const HeaderLayout: VFC<Props> = memo((props)=>{
  const {children} = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
})

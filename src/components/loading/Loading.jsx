import React from 'react';
import style from './Loading.module.scss';

const Loading = () => {
  return (
	  <div className={style.wrap}>
		  <div className={style.loading}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	  </div>
  )
}

export default Loading;
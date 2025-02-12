'use client';
import estilos from './topo.module.css';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import sun from '../../../../public/sun.png';
import moon from '../../../../public/moon.png';

export default function Topo() {

  const [mudarFundoDaPagina, setMudarFundoDaPagina] = useState(false);


  function mudarCorFundo() {
    setMudarFundoDaPagina(!mudarFundoDaPagina);
  }

  return (
    <header className={estilos.header}>
      <Image className={estilos.Image} src={logo} alt='logo' />
      <button onClick={mudarCorFundo} className={estilos.btn}>
        {mudarFundoDaPagina ? <Image className={estilos.icon} src={sun} alt='sol' /> : <Image className={estilos.icon} src={moon} alt='lua' />}
      </button>
    </header>
  )
}
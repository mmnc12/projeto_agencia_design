'use client';
import estilos from './topo.module.css';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import sun from '../../../../public/sun.png';
import moon from '../../../../public/moon.png';
import SecaoExperienciaTrabalho from '../SecaoExperienciaTrabalho';

export default function Topo(props) {

  return (
    <header className={props.mudarFundoDaPagina ? estilos.header_dark : estilos.header_light}>
      <Image className={estilos.Image} src={logo} alt='logo' />
      <button onClick={props.mudarCorFundo} className={props.mudarFundoDaPagina ? estilos['btn-dark'] : estilos['btn-light'] }>
        {props.mudarFundoDaPagina ? <Image className={estilos.icon} src={sun} alt='sol' /> : <Image className={estilos.icon} src={moon} alt='lua' />}
      </button>
    </header>
  )
}
import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
    title?: string;
    children: JSX.Element
}

export const Layout: FC < Props > = ({ children, title }) => {
  return (
    <>
      <Head>
          <title> {title || 'PokemonApp'} </title>
          <meta name="author" content="Cristian Castrillon Laverde" />
          <meta name="description" content={`Información sobre el Pokemon ${title}`} />
          <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar/>
    
    <main style={{
      padding: '0px 20px'
    }}>
        { children }
    </main>
    </>
  )
}

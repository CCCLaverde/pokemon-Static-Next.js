import { pokeApi } from "@/api";
import { Layout } from "../components/layouts"
import { Button } from "@nextui-org/react"
import { NextPage, GetStaticProps } from "next"
import { PokemonListRsponse } from "@/interfaces";


const HomePge: NextPage = (props) => {

  console.log(props);
  
  return (
    <>
    <Layout
      title="Listado de Pokemons"
    >
      <Button color="gradient">
        Laverde Next
      </Button>
    </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListRsponse>('/pokemon/?limit=151')  

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePge


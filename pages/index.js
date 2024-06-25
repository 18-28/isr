import Image from "next/image";
import { Inter } from "next/font/google";
import StoryblokClient from 'storyblok-js-client'

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {

  return (
    <>
      <h1>{props.data.data.story.content.body[0].text}</h1>
    </>
);
}

export async function getStaticProps(){
  const Storyblok = new StoryblokClient({
    accessToken: 'GWas2MzQ7yf76pGmKaM0gwtt'
  })

  const home = await Storyblok.get('cdn/stories/home', {
    version: 'published'
  })

  return {
    props: {
      data: home
    }
  }
}
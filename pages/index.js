import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props)
  return (
    <>
      <h1>home</h1>
    </>


);
}

// export async function getStaticProps(){
//   const data = await fetch('https://polite-stone-0e6ccff03.4.azurestaticapps.net/api/storyblok')
//   const json = {data: }

//   return {
//     props: {
//       data
//     }
//   }
// }
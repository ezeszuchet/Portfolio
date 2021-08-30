import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title="Ezequiel Szuchet - Software Developer, Coffee lover"
      description="This is my portfolio site."
    >
      <Hero />
    </ContainerBlock>
  );
}

/* export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
}; */

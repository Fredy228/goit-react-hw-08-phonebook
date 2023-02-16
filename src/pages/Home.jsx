import { BoxHome, TitleHome, TextHome } from "./StylePages/Home.styled";

const Home = () => {
  return (
    <BoxHome>
      <TitleHome>
        Welcome to Phonebook!
      </TitleHome>
      <TextHome>
        Create and save your contacts.
      </TextHome>
    </BoxHome>
  );
};

export default Home;


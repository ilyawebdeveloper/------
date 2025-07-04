import "./App.scss";
import Main from "./components/Main/Main";
import Gallery from "./components/Gallery/Gallery";
import PageTitle from "./components/PageTitle/PageTitle";
import CardItem, { PropsCardItem } from "./components/CardItem/CardItem";
import Container from "./components/Container/Container";
import { cards } from "./data/cardsData";
import Stock from "./components/Stock/Stock";
import { Reviews } from "./components/Reviews/Reviews";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Main />

      <PageTitle
        title="Услуги"
        subtitle="Номера на любой вкус и бюджет"
        id="services"
      />
      <Container>
        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cards.map((cardItem: PropsCardItem, index) => (
            <CardItem
              key={index}
              title={cardItem.title}
              numberSeats={cardItem.numberSeats}
              tarif={cardItem.tarif}
              price={cardItem.price}
              description={cardItem.description}
              variant={cardItem.variant}
            />
          ))}
        </div>
      </Container>

      <PageTitle
        title="Галерея"
        subtitle="Настоящий отдых для души и тела"
        id="gallery"
      />
      <Gallery />

      <PageTitle title="Акции" subtitle="Помогаем вам сэкономить" id="stock" />
      <Stock />

      <PageTitle title="Отзывы" subtitle="Узнайте мнение других" id="reviews" />
      <Reviews />

      <PageTitle
        title="Контакты"
        subtitle="Вы легко сможете нас найти"
        id="footer"
      />

      <Footer />
    </>
  );
}

export default App;

import HomeTemplate from "@/templates/Home";

const props = {
  sections: {
    top: {
      title: (
        <span>
          Video <br /> Ispezioni
        </span>
      ),
      subtitle: "con telecamera robot",
      imageSrc:
        "https://www.maggi-mariano.it/wp-content/uploads/2022/05/home-1.jpg",
    },
    title: {
      title: "servizi ecologici",
      preTitle: "Maggi Mariano",
      subtitle:
        "Da sempre al fianco di aziende e cittadini per la salvaguardia dell'ambiente",
      imageSrc:
        "https://www.maggi-mariano.it/wp-content/uploads/2022/05/ecologia.jpg",
      button: {
        href: "https://www.maggi-mariano.it",
        label: "Per info o preventivi contattaci",
      },
    },
  },
};

export default function Page() {
  return <HomeTemplate {...props} />;
}

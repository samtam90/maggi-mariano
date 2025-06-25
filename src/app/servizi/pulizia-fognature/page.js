import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";

const imgDims = { width: 1024, height: 1024 };

export function getProps({ title, mobile }) {
  return {
    sections: {
      mainContent: {
        title: {
          left: title,
          right: "Maggi Mariano Servizi Ecologici",
        },
        sections: [
          {
            paragraphs: [
              `Ci occupiamo di ${title}, anche con interventi programmati e fissati nel tempo.`,
              "Effettuare una periodica pulizia delle fognature è importante per garantire un buon funzionamento di tutto l’apparato fognario e di scarico di abitazioni, condomini, aziende ed uffici.",
              "Purtroppo questo è un argomento che troppo spesso non viene preso nella giusta considerazione, nella maggioranza dei casi ci ricordiamo di effettuare la Pulizia fognature solo quando si presentano problemi, a volte anche gravi, alla struttura fognaria.",
              "Anche per la pulizia fognature condominiali va prestata la stessa attenzione, anzi proprio in questi casi è fondamentale programmare anticipatamente gli interventi da effettuare durante il corso di tutto l’anno.",
              "Tutte le operazioni sulle fognatore o fosse biologiche condominiali sono sempre più complesse e impegnative rispetto a quelle che effettuate in una normale abitazione a causa di questo una manutanzione periodica e programmata, una accurata pulizia fognature condominiali garantiscono il buon funzionamento degli scarichi ed evitano spiacevoli problematiche a tutti i condomini.",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `Maggi Mariano Servizi Ecologici srl è l’azienda leader per ${title}, spurgo fosse biologiche e spurgo pozzi neri`,
              "Garantiamo risposte ideali per disostruire, svuotare e liberare qualsiasi impianto, pozzi neri, fognature e fosse biologiche.",
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "E’ possibile stabilire a priori e programmare le nostre ispezioni ed interventi per tutto l’anno evitando le urgenze e le problematiche che ne conseguono.",
              "Siamo in grado di fornire il servizio di spurgo pozzi neri e di pulizia delle fognature ad un prezzo tra i più vantaggiosi sul mercato.",
            ],
            mediaElements: [
              {
                type: "image",
                dimensions: imgDims,
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/fognature.jpg",
                label: `${title} 1`,
              },
            ],
            classNames: { root: "mb-8" },
            mediaPosition: mobile ? "bottom" : "right",
          },
          {
            paragraphs: [
              "Ci siamo dotati da tempo di un parco mezzi estremamente vario e tecnologicamente avanzato.",
              `Con i nostri mezzi possiamo effettuare la ${title} anche in ambienti difficilmente raggiungibili con i normali mezzi come abitazioni in centri storici o in località montane difficili da raggiungere.`,
              `Tutti i nostri operatori sono preparati e qualificati per effettuare la ${title} in maniera professionale senza arrecare nessun disagio alla nostra clientela.`,
            ],
            mediaPosition: mobile ? "bottom" : "left",
            mediaElements: [
              {
                type: "image",
                src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/fognature-2.jpg",
                label: `${title} 2`,
                dimensions: imgDims,
              },
            ],
            classNames: { mediaGrid: "lg:grid-cols-3" },
          },
        ],
      },
      locations: {
        items: [
          {
            label: "Anghiari",
            href: appConfig.links.servizi["pulizia-fognature"].anghiari,
          },
          {
            label: "Arezzo",
            href: appConfig.links.servizi["pulizia-fognature"].arezzo,
          },
          {
            label: "Badia Tedalda",
            href: appConfig.links.servizi["pulizia-fognature"]["badia-tedalda"],
          },
          {
            label: "Bibbiena",
            href: appConfig.links.servizi["pulizia-fognature"].bibbiena,
          },
          {
            label: "Bucine",
            href: appConfig.links.servizi["pulizia-fognature"].bucine,
          },
          {
            label: "Capolona",
            href: appConfig.links.servizi["pulizia-fognature"].capolona,
          },
          {
            label: "Caprese Michelangelo",
            href: appConfig.links.servizi["pulizia-fognature"][
              "caprese-michelangelo"
            ],
          },
          {
            label: "Castel Focognano",
            href: appConfig.links.servizi["pulizia-fognature"][
              "castel-focognano"
            ],
          },
          {
            label: "Castel San Niccolò",
            href: appConfig.links.servizi["pulizia-fognature"][
              "castel-san-niccolo"
            ],
          },
          {
            label: "Castelfranco Piandiscò",
            href: appConfig.links.servizi["pulizia-fognature"][
              "castelfranco-piandisco"
            ],
          },
          {
            label: "Castiglion Fibocchi",
            href: appConfig.links.servizi["pulizia-fognature"][
              "castiglion-fibocchi"
            ],
          },
          {
            label: "Castiglion Fiorentino",
            href: appConfig.links.servizi["pulizia-fognature"][
              "castiglion-fiorentino"
            ],
          },
          {
            label: "Cavriglia",
            href: appConfig.links.servizi["pulizia-fognature"].cavriglia,
          },
          {
            label: "Chitignano",
            href: appConfig.links.servizi["pulizia-fognature"].chitignano,
          },
          {
            label: "Chiusi della Verna",
            href: appConfig.links.servizi["pulizia-fognature"][
              "chiusi-della-verna"
            ],
          },
          {
            label: "Civitella in Valdichiana",
            href: appConfig.links.servizi["pulizia-fognature"][
              "civitella-in-valdichiana"
            ],
          },
          {
            label: "Cortona",
            href: appConfig.links.servizi["pulizia-fognature"].cortona,
          },
          {
            label: "Foiano della Chiana",
            href: appConfig.links.servizi["pulizia-fognature"][
              "foiano-della-chiana"
            ],
          },
          {
            label: "Laterina",
            href: appConfig.links.servizi["pulizia-fognature"].laterina,
          },
          {
            label: "Loro Ciuffenna",
            href: appConfig.links.servizi["pulizia-fognature"][
              "loro-ciuffenna"
            ],
          },
          {
            label: "Lucignano",
            href: appConfig.links.servizi["pulizia-fognature"].lucignano,
          },
          {
            label: "Marciano della Chiana",
            href: appConfig.links.servizi["pulizia-fognature"][
              "marciano-della-chiana"
            ],
          },
          {
            label: "Monte San Savino",
            href: appConfig.links.servizi["pulizia-fognature"][
              "monte-san-savino"
            ],
          },
          {
            label: "Montemignaio",
            href: appConfig.links.servizi["pulizia-fognature"].montemignaio,
          },
          {
            label: "Monterchi",
            href: appConfig.links.servizi["pulizia-fognature"].monterchi,
          },
          {
            label: "Montevarchi",
            href: appConfig.links.servizi["pulizia-fognature"].montevarchi,
          },
          {
            label: "Ortignano Raggiolo",
            href: appConfig.links.servizi["pulizia-fognature"][
              "ortignano-raggiolo"
            ],
          },
          {
            label: "Pergine Valdarno",
            href: appConfig.links.servizi["pulizia-fognature"][
              "pergine-valdarno"
            ],
          },
          {
            label: "Pieve al Toppo",
            href: appConfig.links.servizi["pulizia-fognature"][
              "pieve-al-toppo"
            ],
          },
          {
            label: "Pieve Santo Stefano",
            href: appConfig.links.servizi["pulizia-fognature"][
              "pieve-santo-stefano"
            ],
          },
          {
            label: "Poppi",
            href: appConfig.links.servizi["pulizia-fognature"].poppi,
          },
          {
            label: "Pratovecchio Stia",
            href: appConfig.links.servizi["pulizia-fognature"][
              "pratovecchio-stia"
            ],
          },
          {
            label: "Rassina",
            href: appConfig.links.servizi["pulizia-fognature"].rassina,
          },
          {
            label: "Rigutino",
            href: appConfig.links.servizi["pulizia-fognature"].rigutino,
          },
          {
            label: "San Giovanni Valdarno",
            href: appConfig.links.servizi["pulizia-fognature"][
              "san-giovanni-valdarno"
            ],
          },
          {
            label: "Sansepolcro",
            href: appConfig.links.servizi["pulizia-fognature"].sansepolcro,
          },
          {
            label: "Sestino",
            href: appConfig.links.servizi["pulizia-fognature"].sestino,
          },
          {
            label: "Soci",
            href: appConfig.links.servizi["pulizia-fognature"].soci,
          },
          {
            label: "Subbiano",
            href: appConfig.links.servizi["pulizia-fognature"].subbiano,
          },
          {
            label: "Talla",
            href: appConfig.links.servizi["pulizia-fognature"].talla,
          },
          {
            label: "Terranuova Bracciolini",
            href: appConfig.links.servizi["pulizia-fognature"][
              "terranuova-bracciolini"
            ],
          },
        ],
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutti i comuni della provincia di arezzo
          </span>
        ),
      },
      contacts: {
        preTitle: "Per ogni tua problematica ed urgenza riguardante",
        title,
        phoneNumbers: [
          {
            label: "Tel.: 0575/520447",
            href: "tel:0575520447",
          },
          {
            label: "Cell.: 334 3889878",
            href: "tel:3343889878",
          },
        ],
        content:
          "La nostra azienda è dotata di VIDEOCAMERA ROBOTIZZATA per ispezionare le fognature, scarichi e fosse biologiche difficilmente raggiungibili con altri mezzi, permettendoci di risolvere ogni problematica inerente lo Autospurgo Anghiari dei nostri clienti in tempi brevi.",
        images: [
          {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-5-1-1.jpg",
            alt: "Image1",
          },
          {
            src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-14-1-1.jpg",
            alt: "Image2",
          },
        ],
        formTitle:
          "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
        variant: "horizontal",
        imageDimensions: { width: 650, height: 850 },
      },
    },
  };
}

export const metadata = getMetadata({ title: "Pulizia fognature" });
export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export function Page({ searchParams, title }) {
  const mobile = searchParams?.viewport === "mobile";
  const props = getProps({ title, mobile });
  return (
    <ConditionalPage
      {...props}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
    />
  );
}

export function withBaseProps({ title }) {
  return memo(async ({ searchParams }) => (
    <Page searchParams={searchParams} title={title} />
  ));
}

export default withBaseProps({ title: "Pulizia fognature" });

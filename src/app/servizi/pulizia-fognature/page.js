import { makeNavGridItems, withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";
import { memo } from "react";
import appConfig, { links } from "../../../../app.config";
import { getMetadata } from "../frantoio-mobile-inerti/page";
import { HighlightedText } from "../centrifugazione-o-disidratazione-fanghi/page";
import province from "../../../../.data/province.json";
import Link from "next/link";

const imgDims = { width: 1024, height: 1024 };

export function getContactStuff({ title }) {
  return {
    preTitle: "Per ogni tua problematica e urgenza riguardante",
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
    content: (
      <span className="leading-normal">
        La nostra azienda è dotata di{" "}
        <Link
          href={links.servizi["videoispezioni-telecamera-robot"]}
          className="font-titleBold underline text-green-dark"
        >
          VIDEOCAMERA ROBOTIZZATA
        </Link>{" "}
        per ispezionare le fognature, scarichi e fosse biologiche difficilmente
        raggiungibili con altri mezzi, permettendoci di risolvere ogni
        problematica inerente il servizio di {title} dei nostri clienti in
        tempi brevi.
      </span>
    ),
    images: [
      {
        src: "https://www.maggi-mariano.it/wp-content/uploads/2022/08/Telecamera-14-1-1.jpg",
        alt: "Image2",
      },
    ],
    formTitle:
      "Se preferisici puoi inviarci una mail tramite questo form per chiedere informazioni",
    variant: "horizontal",
    imageDimensions: { width: 650, height: 850 },
  };
}

export function getProps({ title, mobile, locationsData }) {
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
              "Effettuare una periodica pulizia delle fognature è importante per garantire un buon funzionamento di tutto l'apparato fognario e di scarico di abitazioni, condomini, aziende e uffici.",
              <HighlightedText>
                Purtroppo questo è un argomento che troppo spesso non viene
                preso nella giusta considerazione, nella maggioranza dei casi ci
                ricordiamo di effettuare la Pulizia fognature solo quando si
                presentano problemi, a volte anche gravi, alla struttura
                fognaria.
              </HighlightedText>,
              "Anche per la pulizia fognature condominiali va prestata la stessa attenzione, anzi proprio in questi casi è fondamentale programmare anticipatamente gli interventi da effettuare durante il corso di tutto l'anno.",
              "Tutte le operazioni sulle fognature o fosse biologiche condominiali sono sempre più complesse e impegnative rispetto a quelle che effettuate in una normale abitazione a causa di questo una manutenzione periodica e programmata, una accurata pulizia fognature condominiali garantiscono il buon funzionamento degli scarichi ed evitano spiacevoli problematiche a tutti i condomini.",
            ],
            classNames: { root: "mb-8" },
          },
          {
            paragraphs: [
              `Maggi Mariano Servizi Ecologici SRL è l'azienda leader per ${title}, spurgo fosse biologiche e spurgo pozzi neri`,
              "Garantiamo risposte ideali per disostruire, svuotare e liberare qualsiasi impianto, pozzi neri, fognature e fosse biologiche.",
              `Offriamo il servizio di ${title} con professionalità e in modo programmato!`,
              "È possibile stabilire a priori e programmare le nostre ispezioni e interventi per tutto l'anno evitando le urgenze e le problematiche che ne conseguono.",
              "Siamo in grado di fornire il servizio di spurgo pozzi neri e di pulizia delle fognature a un prezzo tra i più vantaggiosi sul mercato.",
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
      locations: locationsData || {
        items: makeNavGridItems(
          province,
          appConfig.links.servizi["pulizia-fognature"]
        ),
        title: (
          <span>
            Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in
            tutte le province italiane:
          </span>
        ),
      },
      contacts: getContactStuff({ title }),
    },
  };
}

export const metadata = getMetadata({ title: "Pulizia fognature" });
export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/MainContent/alt/mobile"),
  Desktop: import("@/templates/MainContent/alt/desktop"),
});

export function Page({ searchParams, title, locationsData }) {
  const mobile = searchParams?.viewport === "mobile";
  const props = getProps({ title, mobile, locationsData });
  return (
    <ConditionalPage
      {...props}
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
    />
  );
}

export function withBaseProps({ title, locationsData }) {
  return memo(async ({ searchParams }) => (
    <Page
      searchParams={searchParams}
      title={title}
      locationsData={locationsData}
    />
  ));
}

export default withBaseProps({ title: "Pulizia fognature" });

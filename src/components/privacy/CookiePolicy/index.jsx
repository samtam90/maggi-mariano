import React, { memo } from "react";
import { twClsx } from "../../../misc/functions";
import { Section, GDPRArticle } from "../auxiliary";

function CookiePolicy({ name, privacyPolicyHref, email, classNames }) {
  return (
    <article
      className={twClsx(
        "py-8 px-4 lg:px-0 font-content text-grey-darkest text-sm",
        classNames?.root
      )}
    >
      <header>
        <h1
          className={twClsx(
            "text-xl lg:text-2xl font-titleBold leading-normal",
            classNames?.header
          )}
        >
          Cookie & storage policy {name}
        </h1>
      </header>
      <Section
        title="Introduzione"
        key="intro"
        className={classNames?.sectionHeader}
      >
        <p>
          Questa politica sui cookie descrive come utilizziamo i cookie e altre
          tecnologie di tracciamento nel nostro sito web, in conformità con le
          linee guida del GDPR. La privacy policy corrispondente è consultabile
          a{" "}
          <a
            href={privacyPolicyHref}
            hrefLang="it"
            className="text-blue-600 lg:hover:underline"
          >
            questo link
          </a>
          .
        </p>
      </Section>
      <Section
        title="Le varie forme di storage dei dati"
        key="storage-desc"
        className={classNames?.sectionHeader}
      >
        <p>
          Il protocollo applicativo HTTP usato per le comunicazioni tramite rete
          internet è per sua natura stateless e non consente di mantenere lo
          stato della sessione fra richieste successive. Ne consegue che è
          necessario fare uso di strumenti che possano memorizzare delle
          informazioni sul dispositivo usato dall'Utente. Si riportano, a scopo
          esemplificativo ma non esaustivo:
        </p>
        <ul className="mt-1">
          <li className="mb-1">
            • <i>cookie:</i> sono stringhe testuali associate a un dominio ed
            aventi durata permanente o limitata nel tempo.
          </li>
          <li className="mb-1">
            • <i>web storage:</i> sono dati memorizzati mediante Web Storage
            API, associati a una origine e aventi durata permanente{" "}
            <i>(local storage)</i> o limitata alla durata della sessione
            <i>(session storage)</i>.
          </li>
        </ul>
      </Section>
      <Section
        title="Tipi di dati memorizzati"
        key="storage-data"
        className={classNames?.sectionHeader}
      >
        <p>
          Nel nostro sito web utilizziamo le seguenti tecnologie di
          memorizzazione dei dati:
        </p>
        <ul className="mt-1">
          <li className="mb-1">
            • <i className="mr-1">Dati nella local storage API:</i> questi dati
            sono usati per memorizzare le tue preferenze relative
            all'abilitazione di cookie e per garantire il corretto funzionamento
            del sito.
          </li>
          <li className="mb-1">
            • <i className="mr-1">Cookie di terze parti di Google:</i> questi
            cookie sono memorizzati, qualora tu decida di abilitare i cookie di
            terze parti, al momento dell'embedding delle mappe di Google Maps
            nelle pagine del sito. Ti invitiamo a consultare{" "}
            <a
              href="https://policies.google.com/technologies/cookies?hl=it-IT"
              hrefLang="it"
              className="text-blue-600 lg:hover:underline"
              target="_blank"
            >
              questa pagina
            </a>{" "}
            per ulteriori dettagli sull'uso dei cookie da parte di Google.
          </li>
          <li className="mb-1">
            • <i className="mr-1">Cookie di terze parti di Youtube:</i> questi
            cookie sono memorizzati, qualora tu decida di abilitare i cookie di
            terze parti, al momento dell'embedding dei video di Youtube nella
            sezione videogallery del sito. Ti invitiamo a consultare{" "}
            <a
              href="https://www.youtube.com/intl/ALL_it/howyoutubeworks/our-commitments/protecting-user-data/"
              hrefLang="it"
              className="text-blue-600 lg:hover:underline"
              target="_blank"
            >
              questa pagina
            </a>{" "}
            per ulteriori dettagli sull'uso dei cookie da parte di Youtube.
          </li>
        </ul>
      </Section>
      <Section
        title="Come utilizziamo i dati memorizzati"
        key="how"
        className={classNames?.sectionHeader}
      >
        <p>Utilizziamo i dati memorizzati per i seguenti scopi:</p>
        <ul className="mt-1">
          <li className="mb-1">
            •{" "}
            <i>
              Personalizzazione e ottimizzazione{" "}
              <GDPRArticle>(Art. 6(1)(a) GDPR)</GDPRArticle>
            </i>
            : dati nella local storage e cookie di terze parti.
          </li>
        </ul>
      </Section>
      <Section
        title="Gestione dei dati"
        key="mgmt"
        className={classNames?.sectionHeader}
      >
        <p>
          Puoi gestire e controllare i cookie e i dati memorizzati con Web
          Storage attraverso le impostazioni del tuo browser. Tieni presente che
          alcune funzionalità del nostro sito web potrebbero non funzionare
          correttamente senza i dati memorizzati.
        </p>
      </Section>
      <Section
        title="Modifiche alla cookie policy"
        key="edits"
        className={classNames?.sectionHeader}
      >
        <p>
          Ci riserviamo il diritto di modificare questa politica sui cookie in
          qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
        </p>
      </Section>
      <Section
        title="Contattaci"
        key="contact-us"
        className={classNames?.sectionHeader}
      >
        <p>
          Se hai domande sulla nostra politica sui cookie, contattaci
          all'indirizzo email:{" "}
          <a
            href={`mailto:${email}`}
            className="lg:hover:underline text-blue-600"
          >
            {email}
          </a>
          .
        </p>
      </Section>
    </article>
  );
}

export default memo(CookiePolicy);

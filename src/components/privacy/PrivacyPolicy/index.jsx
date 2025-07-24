import React, { memo } from "react";
import { GDPRArticle, Mail, Section } from "../auxiliary";
import { twClsx } from "../../../misc/functions";

function PrivacyPolicy({ name, cookiePolicyHref, email, classNames }) {
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
          Privacy policy {name}
        </h1>
      </header>
      <Section
        title="Introduzione"
        key="intro"
        className={classNames?.sectionHeader}
      >
        <p>
          Questa politica sulla privacy descrive come raccogliamo, utilizziamo e
          proteggiamo i tuoi dati personali in conformità con il Regolamento
          Generale sulla Protezione dei Dati (GDPR).
        </p>
      </Section>
      <Section
        title="Informazioni raccolte"
        key="info"
        className={classNames?.sectionHeader}
      >
        <p className="mb-1">Raccogliamo i seguenti tipi di informazioni:</p>
        <ul>
          <li className="mb-1">
            • <i>Informazioni di contatto:</i> nome, cognome e indirizzo email.
            Questi dati sono raccolti in caso di uso del form di contatto per
            rispondere alle tue richieste.
          </li>
          <li>
            • <i>Informazioni di navigazione:</i> indirizzo IP e dati di
            navigazione. Questi dati ci aiutano a migliorare la tua esperienza
            sul nostro sito web e a fornire contenuti personalizzati.
          </li>
        </ul>
      </Section>
      <Section
        title="Uso delle informazioni"
        key="usage"
        className={classNames?.sectionHeader}
      >
        <p className="mb-1">Utilizziamo i tuoi dati personali per:</p>
        <ul>
          <li className="mb-1">
            •{" "}
            <i>
              Elaborare le richieste effettuate mediante il form di contatto{" "}
              <GDPRArticle>(Art. 6(1)(b) GDPR)</GDPRArticle>
            </i>
            : questi dati sono essenziali per l'adempimento del contratto di
            vendita.
          </li>
          <li className="mb-1">
            •{" "}
            <i>
              Migliorare i nostri prodotti e servizi{" "}
              <GDPRArticle>(Art. 6(1)(f) GDPR)</GDPRArticle>
            </i>
            : I dati di navigazione ci permettono di analizzare e migliorare la
            qualità dei nostri prodotti e servizi.
          </li>
          <li className="mb-1">
            •{" "}
            <i>
              Personalizzare la tua esperienza sul nostro sito web{" "}
              <GDPRArticle>(Art. 6(1)(a) GDPR)</GDPRArticle>
            </i>
            : utilizziamo i cookie per offrirti contenuti e promozioni su
            misura per te.
          </li>
          <li className="mb-1">
            •{" "}
            <i>
              Comunicare con te riguardo agli ordini, alle offerte speciali e ad
              altre informazioni pertinenti{" "}
              <GDPRArticle>(Art. 6(1)(a) GDPR)</GDPRArticle>
            </i>
            : Utilizziamo le tue informazioni di contatto per inviarti
            aggiornamenti importanti e offerte esclusive.
          </li>
          <li>
            •{" "}
            <i>
              Rispettare i requisiti legali e normativi{" "}
              <GDPRArticle>(Art. 6(1)(c) GDPR)</GDPRArticle>
            </i>
            : Conserviamo i tuoi dati per adempiere agli obblighi legali e
            fiscali.
          </li>
        </ul>
      </Section>
      <Section
        title="Quali dati memorizziamo sui tuoi dispositivi"
        key="prot"
        className={classNames?.sectionHeader}
      >
        <p>
          Ti invitiamo a consultare la nostra{" "}
          <a
            href={cookiePolicyHref}
            hrefLang="it"
            className="text-blue-600 lg:hover:underline"
          >
            cookie & storage policy
          </a>{" "}
          a riguardo.
        </p>
      </Section>
      <Section
        title="Protezione delle informazioni"
        key="prot"
        className={classNames?.sectionHeader}
      >
        <p>
          Adottiamo misure tecniche e organizzative adeguate per proteggere i
          tuoi dati personali da accessi non autorizzati, perdita o distruzione.
        </p>
      </Section>
      <Section
        title="Condivisione delle informazioni"
        key="sharing"
        className={classNames?.sectionHeader}
      >
        <p className="mb-2">
          Non condividiamo i tuoi dati personali con terze parti, salvo nei
          seguenti casi:
        </p>
        <ul>
          <li className="mb-1">
            • Quando è necessario per elaborare le tue richieste. Questi
            fornitori sono soggetti a obblighi di riservatezza e sicurezza.
          </li>
          <li>
            • Quando richiesto dalla legge o dalle autorità competenti. Possiamo
            divulgare i tuoi dati per rispettare gli obblighi legali.
          </li>
        </ul>
      </Section>
      <Section
        title="I tuoi diritti"
        key="rights"
        className={classNames?.sectionHeader}
      >
        <p>
          Hai il diritto di accedere, rettificare o cancellare i tuoi dati
          personali, nonché di opporsi al loro trattamento o richiederne la
          limitazione. Per esercitare i tuoi diritti, contattaci all'indirizzo
          email: <Mail>{email}</Mail>.
        </p>
      </Section>
      <Section
        title="Eliminazione dei dati"
        key="deletion"
        className={classNames?.sectionHeader}
      >
        <p>
          Se desideri eliminare i tuoi dati, puoi farlo contattandoci
          all'indirizzo email: <Mail>{email}</Mail>. In questo caso, tutti i
          tuoi dati personali saranno rimossi dai nostri sistemi entro un
          periodo massimo di 30 giorni, salvo eventuali obblighi legali che ci
          richiedano di conservare alcuni dati per un periodo più lungo.
        </p>
      </Section>
      <Section
        title="Modifiche alla privacy policy"
        key="edits"
        className={classNames?.sectionHeader}
      >
        <p>
          Ci riserviamo il diritto di modificare questa politica sulla privacy
          in qualsiasi momento. Le modifiche saranno pubblicate su questa
          pagina.
        </p>
      </Section>
      <Section
        title="Contattaci"
        key="contact-us"
        className={classNames?.sectionHeader}
      >
        <p>
          Se hai domande sulla nostra politica sulla privacy, contattaci
          all'indirizzo email: <Mail>{email}</Mail>.
        </p>
      </Section>
    </article>
  );
}

export default memo(PrivacyPolicy);

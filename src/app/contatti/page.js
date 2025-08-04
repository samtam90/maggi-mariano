import Icons from "@/components/Icons";
import { withConditionalRendering } from "@/misc/functions";
import { onContactFormSubmit } from "@/misc/server";

const props = {
  formTitle: "Usa il modulo sottostante per contattarci",
  title: {
    left: "I nostri contatti",
    right: "Maggi mariano servizi ecologici",
  },
  items: [
    {
      title: "sede poppi",
      subtitle: "Via Aretina 16, 52014 Ponte a Poppi - (AR)",
      href: "https://maps.google.com/maps?q=Maggi%20Mariano%20Servizi%20Ecologici%20srl%2C%20Via%20Aretina%2C%2016%2C%2052014%20Poppi%20AR",
      icon: <Icons.MapPin className="text-xl" />,
    },
    {
      title: "sede arezzo",
      subtitle: "SS679, 52100 Arezzo (AR)",
      href: "https://maps.google.com/maps?q=Autospurgo%20Aretino%20Maggi%20Mariano%2C%20SS679%2C%2052100%20Arezzo%20AR",
      icon: <Icons.MapPin className="text-xl" />,
    },
    {
      title: "assistenza clienti",
      subtitle: "+39 0575 520447",
      href: "tel:+390575520447",
      icon: <Icons.Phone />,
    },
    {
      title: "rifiuti liquidi",
      subtitle: "+39 334 3889878",
      href: "tel:+393343889878",
      icon: <Icons.MobilePhone />,
    },
    {
      title: "rifiuti solidi",
      subtitle: "+39 335 1377089",
      href: "tel:+393351377089",
      icon: <Icons.MobilePhone />,
    },
    {
      title: "fax",
      subtitle: "+39 0575 527949",
      href: "tel:+390575527949",
      icon: <Icons.Phone />,
    },
    {
      title: "email",
      subtitle: "serviziecologici@maggimariano.it",
      href: "mailto:serviziecologici@maggimariano.it",
      icon: <Icons.Envelope />,
    },
    {
      title: "P.I. e C.F.",
      subtitle: "01731060511",
      href: "https://www.maggi-mariano.it",
      icon: <Icons.PencilSquare />,
    },
  ],
};

export const metadata = {
  title: "Contatti - Maggi Mariano servizi ecologici",
};

export const ConditionalPage = withConditionalRendering({
  Mobile: import("@/templates/Contacts/alt/mobile"),
  Desktop: import("@/templates/Contacts/alt/desktop"),
});

export default function Page({ searchParams }) {
  return (
    <ConditionalPage
      searchParams={searchParams}
      onContactFormSubmit={onContactFormSubmit}
      {...props}
    />
  );
}

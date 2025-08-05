import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cerreto di Spoleto",
  canonical: links.servizi["pulizia-fognature"]["cerreto-di-spoleto"],
});
export default withBaseProps({
  title: "Pulizia fognature Cerreto di Spoleto",
  locationNames: { label: "Cerreto di Spoleto", href: "cerreto-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

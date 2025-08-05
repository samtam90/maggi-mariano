import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cerreto di Spoleto",
  canonical: links.servizi["noleggio-bagni-chimici"]["cerreto-di-spoleto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cerreto di Spoleto",
  locationNames: { label: "Cerreto di Spoleto", href: "cerreto-di-spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vallo di Nera",
  canonical: links.servizi["noleggio-bagni-chimici"]["vallo-di-nera"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Vallo di Nera",
  locationNames: { label: "Vallo di Nera", href: "vallo-di-nera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Agrigento",
  canonical: links.servizi["noleggio-bagni-chimici"]["agrigento"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Agrigento",
  locationNames: { label: "Agrigento", href: "agrigento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["agrigento"],
      name: "Agrigento",
  }),
});

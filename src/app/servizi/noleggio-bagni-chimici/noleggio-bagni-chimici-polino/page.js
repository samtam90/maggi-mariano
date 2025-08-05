import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Polino",
  canonical: links.servizi["noleggio-bagni-chimici"]["polino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Polino",
  locationNames: { label: "Polino", href: "polino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

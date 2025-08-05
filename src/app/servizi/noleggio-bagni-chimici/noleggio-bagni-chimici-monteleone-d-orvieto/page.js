import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Monteleone d'Orvieto",
  canonical: links.servizi["noleggio-bagni-chimici"]["monteleone-d-orvieto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Monteleone d'Orvieto",
  locationNames: { label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

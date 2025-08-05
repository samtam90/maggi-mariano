import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Orvieto",
  canonical: links.servizi["noleggio-bagni-chimici"]["orvieto"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Orvieto",
  locationNames: { label: "Orvieto", href: "orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montecastrilli",
  canonical: links.servizi["noleggio-bagni-chimici"]["montecastrilli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montecastrilli",
  locationNames: { label: "Montecastrilli", href: "montecastrilli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

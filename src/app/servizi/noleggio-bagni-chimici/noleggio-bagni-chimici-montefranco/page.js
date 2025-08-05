import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montefranco",
  canonical: links.servizi["noleggio-bagni-chimici"]["montefranco"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montefranco",
  locationNames: { label: "Montefranco", href: "montefranco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

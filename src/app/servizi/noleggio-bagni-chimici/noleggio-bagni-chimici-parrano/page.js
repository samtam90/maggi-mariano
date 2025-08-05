import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Parrano",
  canonical: links.servizi["noleggio-bagni-chimici"]["parrano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Parrano",
  locationNames: { label: "Parrano", href: "parrano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

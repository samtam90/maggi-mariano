import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Alviano",
  canonical: links.servizi["noleggio-bagni-chimici"]["alviano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Alviano",
  locationNames: { label: "Alviano", href: "alviano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

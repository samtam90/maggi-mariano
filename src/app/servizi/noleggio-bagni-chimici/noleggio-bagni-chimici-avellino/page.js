import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Avellino",
  canonical: links.servizi["noleggio-bagni-chimici"]["avellino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Avellino",
  locationNames: { label: "Avellino", href: "avellino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["avellino"],
      name: "Avellino",
  }),
});

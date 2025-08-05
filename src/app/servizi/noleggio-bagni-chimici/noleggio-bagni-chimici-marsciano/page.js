import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Marsciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["marsciano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Marsciano",
  locationNames: { label: "Marsciano", href: "marsciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

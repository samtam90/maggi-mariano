import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Imperia",
  canonical: links.servizi["noleggio-bagni-chimici"]["imperia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Imperia",
  locationNames: { label: "Imperia", href: "imperia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});

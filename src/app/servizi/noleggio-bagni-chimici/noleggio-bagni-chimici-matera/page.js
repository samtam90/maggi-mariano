import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Matera",
  canonical: links.servizi["noleggio-bagni-chimici"]["matera"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Matera",
  locationNames: { label: "Matera", href: "matera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});

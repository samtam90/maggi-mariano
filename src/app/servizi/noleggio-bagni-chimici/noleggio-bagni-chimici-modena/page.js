import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Modena",
  canonical: links.servizi["noleggio-bagni-chimici"]["modena"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Modena",
  locationNames: { label: "Modena", href: "modena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["modena"],
      name: "Modena",
  }),
});

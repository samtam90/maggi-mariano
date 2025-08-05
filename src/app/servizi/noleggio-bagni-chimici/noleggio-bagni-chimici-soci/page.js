import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Soci",
  canonical: links.servizi["noleggio-bagni-chimici"]["soci"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Soci",
  locationNames: { label: "Soci", href: "soci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

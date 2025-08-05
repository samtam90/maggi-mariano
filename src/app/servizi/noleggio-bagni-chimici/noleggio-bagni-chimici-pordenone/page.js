import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pordenone",
  canonical: links.servizi["noleggio-bagni-chimici"]["pordenone"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pordenone",
  locationNames: { label: "Pordenone", href: "pordenone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pordenone"],
      name: "Pordenone",
  }),
});

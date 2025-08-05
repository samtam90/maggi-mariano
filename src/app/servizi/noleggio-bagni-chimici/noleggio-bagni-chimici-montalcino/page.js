import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montalcino",
  canonical: links.servizi["noleggio-bagni-chimici"]["montalcino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montalcino",
  locationNames: { label: "Montalcino", href: "montalcino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

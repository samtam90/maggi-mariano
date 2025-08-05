import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Lucca",
  canonical: links.servizi["noleggio-bagni-chimici"]["lucca"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Lucca",
  locationNames: { label: "Lucca", href: "lucca" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Fiesole",
  canonical: links.servizi["noleggio-bagni-chimici"]["fiesole"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Fiesole",
  locationNames: { label: "Fiesole", href: "fiesole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});

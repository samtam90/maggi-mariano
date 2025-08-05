import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cuneo",
  canonical: links.servizi["noleggio-bagni-chimici"]["cuneo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cuneo",
  locationNames: { label: "Cuneo", href: "cuneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});

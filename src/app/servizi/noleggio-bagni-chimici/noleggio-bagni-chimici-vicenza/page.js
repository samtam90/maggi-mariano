import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Vicenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["vicenza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Vicenza",
  locationNames: { label: "Vicenza", href: "vicenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["vicenza"],
      name: "Vicenza",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Potenza",
  canonical: links.servizi["noleggio-bagni-chimici"]["potenza"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Potenza",
  locationNames: { label: "Potenza", href: "potenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["potenza"],
      name: "Potenza",
  }),
});

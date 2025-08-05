import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Cremona",
  canonical: links.servizi["noleggio-bagni-chimici"]["cremona"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Cremona",
  locationNames: { label: "Cremona", href: "cremona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["cremona"],
      name: "Cremona",
  }),
});

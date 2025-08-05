import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici La Spezia",
  canonical: links.servizi["noleggio-bagni-chimici"]["la-spezia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici La Spezia",
  locationNames: { label: "La Spezia", href: "la-spezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});

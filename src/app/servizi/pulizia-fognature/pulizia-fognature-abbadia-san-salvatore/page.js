import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Abbadia San Salvatore",
  canonical: links.servizi["pulizia-fognature"]["abbadia-san-salvatore"],
});
export default withBaseProps({
  title: "Pulizia fognature Abbadia San Salvatore",
  locationNames: { label: "Abbadia San Salvatore", href: "abbadia-san-salvatore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

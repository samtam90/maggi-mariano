import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature La Spezia",
  canonical: links.servizi["pulizia-fognature"]["la-spezia"],
});
export default withBaseProps({
  title: "Pulizia fognature La Spezia",
  locationNames: { label: "La Spezia", href: "la-spezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});

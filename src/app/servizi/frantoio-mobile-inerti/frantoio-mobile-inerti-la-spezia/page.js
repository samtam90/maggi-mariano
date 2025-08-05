import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti La Spezia",
  canonical: links.servizi["frantoio-mobile-inerti"]["la-spezia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti La Spezia",
  locationNames: { label: "La Spezia", href: "la-spezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["la-spezia"],
      name: "La Spezia",
  }),
});

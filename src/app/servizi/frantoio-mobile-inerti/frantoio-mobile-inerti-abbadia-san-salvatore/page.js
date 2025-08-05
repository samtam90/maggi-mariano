import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Abbadia San Salvatore",
  canonical: links.servizi["frantoio-mobile-inerti"]["abbadia-san-salvatore"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Abbadia San Salvatore",
  locationNames: { label: "Abbadia San Salvatore", href: "abbadia-san-salvatore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

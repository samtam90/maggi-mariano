import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Matera",
  canonical: links.servizi["frantoio-mobile-inerti"]["matera"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Matera",
  locationNames: { label: "Matera", href: "matera" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["matera"],
      name: "Matera",
  }),
});

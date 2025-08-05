import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Catanzaro",
  canonical: links.servizi["frantoio-mobile-inerti"]["catanzaro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Catanzaro",
  locationNames: { label: "Catanzaro", href: "catanzaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});

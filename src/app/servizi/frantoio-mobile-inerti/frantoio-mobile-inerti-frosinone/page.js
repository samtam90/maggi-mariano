import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Frosinone",
  canonical: links.servizi["frantoio-mobile-inerti"]["frosinone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Frosinone",
  locationNames: { label: "Frosinone", href: "frosinone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});

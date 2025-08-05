import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Murlo",
  canonical: links.servizi["frantoio-mobile-inerti"]["murlo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Murlo",
  locationNames: { label: "Murlo", href: "murlo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

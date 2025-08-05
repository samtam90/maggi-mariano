import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pienza",
  canonical: links.servizi["frantoio-mobile-inerti"]["pienza"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pienza",
  locationNames: { label: "Pienza", href: "pienza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

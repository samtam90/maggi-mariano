import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Radicofani",
  canonical: links.servizi["frantoio-mobile-inerti"]["radicofani"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Radicofani",
  locationNames: { label: "Radicofani", href: "radicofani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

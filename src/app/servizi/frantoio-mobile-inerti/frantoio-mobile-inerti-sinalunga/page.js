import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sinalunga",
  canonical: links.servizi["frantoio-mobile-inerti"]["sinalunga"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sinalunga",
  locationNames: { label: "Sinalunga", href: "sinalunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

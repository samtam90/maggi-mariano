import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sogliano al Rubicone",
  canonical: links.servizi["frantoio-mobile-inerti"]["sogliano-al-rubicone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sogliano al Rubicone",
  locationNames: { label: "Sogliano al Rubicone", href: "sogliano-al-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

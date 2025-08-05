import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Savignano sul Rubicone",
  canonical: links.servizi["frantoio-mobile-inerti"]["savignano-sul-rubicone"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Savignano sul Rubicone",
  locationNames: { label: "Savignano sul Rubicone", href: "savignano-sul-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Santa Sofia",
  canonical: links.servizi["frantoio-mobile-inerti"]["santa-sofia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Santa Sofia",
  locationNames: { label: "Santa Sofia", href: "santa-sofia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Forlì",
  canonical: links.servizi["frantoio-mobile-inerti"]["forli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Forlì",
  locationNames: { label: "Forlì", href: "forli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

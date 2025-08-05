import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Forlì-Cesena",
  canonical: links.servizi["frantoio-mobile-inerti"]["forli-cesena"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Forlì-Cesena",
  locationNames: { label: "Forlì-Cesena", href: "forli-cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì-Cesena",
  }),
});

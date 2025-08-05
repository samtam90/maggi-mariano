import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Predappio",
  canonical: links.servizi["frantoio-mobile-inerti"]["predappio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Predappio",
  locationNames: { label: "Predappio", href: "predappio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

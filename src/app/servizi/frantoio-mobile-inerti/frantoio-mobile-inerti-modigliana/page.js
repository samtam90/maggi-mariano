import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Modigliana",
  canonical: links.servizi["frantoio-mobile-inerti"]["modigliana"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Modigliana",
  locationNames: { label: "Modigliana", href: "modigliana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

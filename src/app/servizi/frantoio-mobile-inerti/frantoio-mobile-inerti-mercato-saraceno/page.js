import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Mercato Saraceno",
  canonical: links.servizi["frantoio-mobile-inerti"]["mercato-saraceno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Mercato Saraceno",
  locationNames: { label: "Mercato Saraceno", href: "mercato-saraceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

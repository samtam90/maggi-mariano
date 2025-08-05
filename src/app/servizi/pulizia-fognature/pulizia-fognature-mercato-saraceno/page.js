import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Mercato Saraceno",
  canonical: links.servizi["pulizia-fognature"]["mercato-saraceno"],
});
export default withBaseProps({
  title: "Pulizia fognature Mercato Saraceno",
  locationNames: { label: "Mercato Saraceno", href: "mercato-saraceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

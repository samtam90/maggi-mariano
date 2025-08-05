import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sogliano al Rubicone",
  canonical: links.servizi["pulizia-fognature"]["sogliano-al-rubicone"],
});
export default withBaseProps({
  title: "Pulizia fognature Sogliano al Rubicone",
  locationNames: { label: "Sogliano al Rubicone", href: "sogliano-al-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

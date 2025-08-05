import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Longiano",
  canonical: links.servizi["pulizia-fognature"]["longiano"],
});
export default withBaseProps({
  title: "Pulizia fognature Longiano",
  locationNames: { label: "Longiano", href: "longiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sarsina",
  canonical: links.servizi["pulizia-fognature"]["sarsina"],
});
export default withBaseProps({
  title: "Pulizia fognature Sarsina",
  locationNames: { label: "Sarsina", href: "sarsina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cesena",
  canonical: links.servizi["pulizia-fognature"]["cesena"],
});
export default withBaseProps({
  title: "Pulizia fognature Cesena",
  locationNames: { label: "Cesena", href: "cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

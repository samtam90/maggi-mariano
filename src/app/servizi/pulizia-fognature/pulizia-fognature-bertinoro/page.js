import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bertinoro",
  canonical: links.servizi["pulizia-fognature"]["bertinoro"],
});
export default withBaseProps({
  title: "Pulizia fognature Bertinoro",
  locationNames: { label: "Bertinoro", href: "bertinoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

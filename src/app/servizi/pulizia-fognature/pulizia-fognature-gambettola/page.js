import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gambettola",
  canonical: links.servizi["pulizia-fognature"]["gambettola"],
});
export default withBaseProps({
  title: "Pulizia fognature Gambettola",
  locationNames: { label: "Gambettola", href: "gambettola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

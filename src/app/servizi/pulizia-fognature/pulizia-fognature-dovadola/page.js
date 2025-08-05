import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Dovadola",
  canonical: links.servizi["pulizia-fognature"]["dovadola"],
});
export default withBaseProps({
  title: "Pulizia fognature Dovadola",
  locationNames: { label: "Dovadola", href: "dovadola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

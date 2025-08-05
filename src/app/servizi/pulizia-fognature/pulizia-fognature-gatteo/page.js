import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gatteo",
  canonical: links.servizi["pulizia-fognature"]["gatteo"],
});
export default withBaseProps({
  title: "Pulizia fognature Gatteo",
  locationNames: { label: "Gatteo", href: "gatteo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bagno di Romagna",
  canonical: links.servizi["pulizia-fognature"]["bagno-di-romagna"],
});
export default withBaseProps({
  title: "Pulizia fognature Bagno di Romagna",
  locationNames: { label: "Bagno di Romagna", href: "bagno-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

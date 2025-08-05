import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cesenatico",
  canonical: links.servizi["pulizia-fognature"]["cesenatico"],
});
export default withBaseProps({
  title: "Pulizia fognature Cesenatico",
  locationNames: { label: "Cesenatico", href: "cesenatico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

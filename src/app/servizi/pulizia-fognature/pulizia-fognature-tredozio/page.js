import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Tredozio",
  canonical: links.servizi["pulizia-fognature"]["tredozio"],
});
export default withBaseProps({
  title: "Pulizia fognature Tredozio",
  locationNames: { label: "Tredozio", href: "tredozio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

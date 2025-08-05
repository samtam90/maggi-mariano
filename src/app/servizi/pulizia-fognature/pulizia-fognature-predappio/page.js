import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Predappio",
  canonical: links.servizi["pulizia-fognature"]["predappio"],
});
export default withBaseProps({
  title: "Pulizia fognature Predappio",
  locationNames: { label: "Predappio", href: "predappio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

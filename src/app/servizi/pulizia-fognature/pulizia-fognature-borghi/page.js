import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Borghi",
  canonical: links.servizi["pulizia-fognature"]["borghi"],
});
export default withBaseProps({
  title: "Pulizia fognature Borghi",
  locationNames: { label: "Borghi", href: "borghi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

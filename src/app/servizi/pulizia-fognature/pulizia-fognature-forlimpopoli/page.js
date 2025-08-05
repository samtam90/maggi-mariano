import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Forlimpopoli",
  canonical: links.servizi["pulizia-fognature"]["forlimpopoli"],
});
export default withBaseProps({
  title: "Pulizia fognature Forlimpopoli",
  locationNames: { label: "Forlimpopoli", href: "forlimpopoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

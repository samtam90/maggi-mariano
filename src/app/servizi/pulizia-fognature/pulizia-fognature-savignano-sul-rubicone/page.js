import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Savignano sul Rubicone",
  canonical: links.servizi["pulizia-fognature"]["savignano-sul-rubicone"],
});
export default withBaseProps({
  title: "Pulizia fognature Savignano sul Rubicone",
  locationNames: { label: "Savignano sul Rubicone", href: "savignano-sul-rubicone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

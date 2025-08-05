import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Galeata",
  canonical: links.servizi["pulizia-fognature"]["galeata"],
});
export default withBaseProps({
  title: "Pulizia fognature Galeata",
  locationNames: { label: "Galeata", href: "galeata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});

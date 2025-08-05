import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cuneo",
  canonical: links.servizi["pulizia-fognature"]["cuneo"],
});
export default withBaseProps({
  title: "Pulizia fognature Cuneo",
  locationNames: { label: "Cuneo", href: "cuneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});

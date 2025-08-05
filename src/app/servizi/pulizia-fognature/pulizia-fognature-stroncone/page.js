import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Stroncone",
  canonical: links.servizi["pulizia-fognature"]["stroncone"],
});
export default withBaseProps({
  title: "Pulizia fognature Stroncone",
  locationNames: { label: "Stroncone", href: "stroncone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

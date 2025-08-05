import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Terni",
  canonical: links.servizi["pulizia-fognature"]["terni"],
});
export default withBaseProps({
  title: "Pulizia fognature Terni",
  locationNames: { label: "Terni", href: "terni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

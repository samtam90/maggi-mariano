import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pavia",
  canonical: links.servizi["pulizia-fognature"]["pavia"],
});
export default withBaseProps({
  title: "Pulizia fognature Pavia",
  locationNames: { label: "Pavia", href: "pavia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});

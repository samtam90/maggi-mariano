import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Trento",
  canonical: links.servizi["pulizia-fognature"]["trento"],
});
export default withBaseProps({
  title: "Pulizia fognature Trento",
  locationNames: { label: "Trento", href: "trento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["trento"],
      name: "Trento",
  }),
});

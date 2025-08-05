import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Novara",
  canonical: links.servizi["pulizia-fognature"]["novara"],
});
export default withBaseProps({
  title: "Pulizia fognature Novara",
  locationNames: { label: "Novara", href: "novara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});

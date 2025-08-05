import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Napoli",
  canonical: links.servizi["pulizia-fognature"]["napoli"],
});
export default withBaseProps({
  title: "Pulizia fognature Napoli",
  locationNames: { label: "Napoli", href: "napoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});

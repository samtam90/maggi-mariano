import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Lecco",
  canonical: links.servizi["pulizia-fognature"]["lecco"],
});
export default withBaseProps({
  title: "Pulizia fognature Lecco",
  locationNames: { label: "Lecco", href: "lecco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});

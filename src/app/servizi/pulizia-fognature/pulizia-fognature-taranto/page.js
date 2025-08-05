import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Taranto",
  canonical: links.servizi["pulizia-fognature"]["taranto"],
});
export default withBaseProps({
  title: "Pulizia fognature Taranto",
  locationNames: { label: "Taranto", href: "taranto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["taranto"],
      name: "Taranto",
  }),
});

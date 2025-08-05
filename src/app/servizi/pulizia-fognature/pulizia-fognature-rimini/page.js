import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rimini",
  canonical: links.servizi["pulizia-fognature"]["rimini"],
});
export default withBaseProps({
  title: "Pulizia fognature Rimini",
  locationNames: { label: "Rimini", href: "rimini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["rimini"],
      name: "Rimini",
  }),
});

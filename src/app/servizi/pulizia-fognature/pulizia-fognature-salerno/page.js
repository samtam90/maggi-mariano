import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Salerno",
  canonical: links.servizi["pulizia-fognature"]["salerno"],
});
export default withBaseProps({
  title: "Pulizia fognature Salerno",
  locationNames: { label: "Salerno", href: "salerno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["salerno"],
      name: "Salerno",
  }),
});

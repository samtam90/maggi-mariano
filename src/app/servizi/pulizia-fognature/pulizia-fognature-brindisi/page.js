import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Brindisi",
  canonical: links.servizi["pulizia-fognature"]["brindisi"],
});
export default withBaseProps({
  title: "Pulizia fognature Brindisi",
  locationNames: { label: "Brindisi", href: "brindisi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["brindisi"],
      name: "Brindisi",
  }),
});

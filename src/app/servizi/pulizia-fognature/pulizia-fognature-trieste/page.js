import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Trieste",
  canonical: links.servizi["pulizia-fognature"]["trieste"],
});
export default withBaseProps({
  title: "Pulizia fognature Trieste",
  locationNames: { label: "Trieste", href: "trieste" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["trieste"],
      name: "Trieste",
  }),
});

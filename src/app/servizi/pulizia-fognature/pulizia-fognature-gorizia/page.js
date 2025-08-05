import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gorizia",
  canonical: links.servizi["pulizia-fognature"]["gorizia"],
});
export default withBaseProps({
  title: "Pulizia fognature Gorizia",
  locationNames: { label: "Gorizia", href: "gorizia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["gorizia"],
      name: "Gorizia",
  }),
});

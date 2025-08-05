import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cagliari",
  canonical: links.servizi["pulizia-fognature"]["cagliari"],
});
export default withBaseProps({
  title: "Pulizia fognature Cagliari",
  locationNames: { label: "Cagliari", href: "cagliari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Biella",
  canonical: links.servizi["pulizia-fognature"]["biella"],
});
export default withBaseProps({
  title: "Pulizia fognature Biella",
  locationNames: { label: "Biella", href: "biella" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});

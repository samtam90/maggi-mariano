import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rassina",
  canonical: links.servizi["pulizia-fognature"]["rassina"],
});
export default withBaseProps({
  title: "Pulizia fognature Rassina",
  locationNames: { label: "Rassina", href: "rassina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

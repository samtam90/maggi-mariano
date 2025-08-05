import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Anghiari",
  canonical: links.servizi["pulizia-fognature"]["anghiari"],
});
export default withBaseProps({
  title: "Pulizia fognature Anghiari",
  locationNames: { label: "Anghiari", href: "anghiari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

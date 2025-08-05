import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sestino",
  canonical: links.servizi["pulizia-fognature"]["sestino"],
});
export default withBaseProps({
  title: "Pulizia fognature Sestino",
  locationNames: { label: "Sestino", href: "sestino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

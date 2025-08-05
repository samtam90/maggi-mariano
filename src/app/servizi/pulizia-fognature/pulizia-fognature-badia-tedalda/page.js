import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Badia Tedalda",
  canonical: links.servizi["pulizia-fognature"]["badia-tedalda"],
});
export default withBaseProps({
  title: "Pulizia fognature Badia Tedalda",
  locationNames: { label: "Badia Tedalda", href: "badia-tedalda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bucine",
  canonical: links.servizi["pulizia-fognature"]["bucine"],
});
export default withBaseProps({
  title: "Pulizia fognature Bucine",
  locationNames: { label: "Bucine", href: "bucine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

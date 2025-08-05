import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monterchi",
  canonical: links.servizi["pulizia-fognature"]["monterchi"],
});
export default withBaseProps({
  title: "Pulizia fognature Monterchi",
  locationNames: { label: "Monterchi", href: "monterchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

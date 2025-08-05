import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Arezzo",
  canonical: links.servizi["pulizia-fognature"]["arezzo"],
});
export default withBaseProps({
  title: "Pulizia fognature Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

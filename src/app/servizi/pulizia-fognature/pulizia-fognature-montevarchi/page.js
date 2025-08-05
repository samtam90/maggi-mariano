import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montevarchi",
  canonical: links.servizi["pulizia-fognature"]["montevarchi"],
});
export default withBaseProps({
  title: "Pulizia fognature Montevarchi",
  locationNames: { label: "Montevarchi", href: "montevarchi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

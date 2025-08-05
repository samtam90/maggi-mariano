import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cavriglia",
  canonical: links.servizi["pulizia-fognature"]["cavriglia"],
});
export default withBaseProps({
  title: "Pulizia fognature Cavriglia",
  locationNames: { label: "Cavriglia", href: "cavriglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

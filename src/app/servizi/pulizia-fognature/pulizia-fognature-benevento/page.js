import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Benevento",
  canonical: links.servizi["pulizia-fognature"]["benevento"],
});
export default withBaseProps({
  title: "Pulizia fognature Benevento",
  locationNames: { label: "Benevento", href: "benevento" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sinalunga",
  canonical: links.servizi["pulizia-fognature"]["sinalunga"],
});
export default withBaseProps({
  title: "Pulizia fognature Sinalunga",
  locationNames: { label: "Sinalunga", href: "sinalunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

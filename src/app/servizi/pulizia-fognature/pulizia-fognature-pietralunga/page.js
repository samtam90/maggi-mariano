import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pietralunga",
  canonical: links.servizi["pulizia-fognature"]["pietralunga"],
});
export default withBaseProps({
  title: "Pulizia fognature Pietralunga",
  locationNames: { label: "Pietralunga", href: "pietralunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bevagna",
  canonical: links.servizi["pulizia-fognature"]["bevagna"],
});
export default withBaseProps({
  title: "Pulizia fognature Bevagna",
  locationNames: { label: "Bevagna", href: "bevagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

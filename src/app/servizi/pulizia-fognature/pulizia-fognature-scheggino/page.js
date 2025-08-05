import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Scheggino",
  canonical: links.servizi["pulizia-fognature"]["scheggino"],
});
export default withBaseProps({
  title: "Pulizia fognature Scheggino",
  locationNames: { label: "Scheggino", href: "scheggino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});

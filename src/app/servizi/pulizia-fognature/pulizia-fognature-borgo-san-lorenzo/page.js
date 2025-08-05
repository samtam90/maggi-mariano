import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Borgo San Lorenzo",
  canonical: links.servizi["pulizia-fognature"]["borgo-san-lorenzo"],
});
export default withBaseProps({
  title: "Pulizia fognature Borgo San Lorenzo",
  locationNames: { label: "Borgo San Lorenzo", href: "borgo-san-lorenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});

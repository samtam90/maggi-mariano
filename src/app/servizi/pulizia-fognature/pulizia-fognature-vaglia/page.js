import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Vaglia",
  canonical: links.servizi["pulizia-fognature"]["vaglia"],
});
export default withBaseProps({
  title: "Pulizia fognature Vaglia",
  locationNames: { label: "Vaglia", href: "vaglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});

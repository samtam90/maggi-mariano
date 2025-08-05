import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pisa",
  canonical: links.servizi["pulizia-fognature"]["pisa"],
});
export default withBaseProps({
  title: "Pulizia fognature Pisa",
  locationNames: { label: "Pisa", href: "pisa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pisa"],
      name: "Pisa",
  }),
});

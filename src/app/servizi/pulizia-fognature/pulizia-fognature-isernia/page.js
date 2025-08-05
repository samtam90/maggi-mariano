import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Isernia",
  canonical: links.servizi["pulizia-fognature"]["isernia"],
});
export default withBaseProps({
  title: "Pulizia fognature Isernia",
  locationNames: { label: "Isernia", href: "isernia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["isernia"],
      name: "Isernia",
  }),
});

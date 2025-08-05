import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature [name]",
  canonical: links.servizi["pulizia-fognature"]["[path]"],
});
export default withBaseProps({
  title: "Pulizia fognature [name]",
  locationNames: { label: "[name]", href: "[path]" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});

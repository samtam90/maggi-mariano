import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Ancona",
  canonical: links.servizi["pulizia-fognature"]["ancona"],
});
export default withBaseProps({
  title: "Pulizia fognature Ancona",
  locationNames: { label: "Ancona", href: "ancona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});

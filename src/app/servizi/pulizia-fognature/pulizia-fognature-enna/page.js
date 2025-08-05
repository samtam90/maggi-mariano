import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Enna",
  canonical: links.servizi["pulizia-fognature"]["enna"],
});
export default withBaseProps({
  title: "Pulizia fognature Enna",
  locationNames: { label: "Enna", href: "enna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});

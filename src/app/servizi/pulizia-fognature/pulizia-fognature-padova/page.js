import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Padova",
  canonical: links.servizi["pulizia-fognature"]["padova"],
});
export default withBaseProps({
  title: "Pulizia fognature Padova",
  locationNames: { label: "Padova", href: "padova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["padova"],
      name: "Padova",
  }),
});

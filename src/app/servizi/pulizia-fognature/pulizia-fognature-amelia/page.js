import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Amelia",
  canonical: links.servizi["pulizia-fognature"]["amelia"],
});
export default withBaseProps({
  title: "Pulizia fognature Amelia",
  locationNames: { label: "Amelia", href: "amelia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Otricoli",
  canonical: links.servizi["pulizia-fognature"]["otricoli"],
});
export default withBaseProps({
  title: "Pulizia fognature Otricoli",
  locationNames: { label: "Otricoli", href: "otricoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});

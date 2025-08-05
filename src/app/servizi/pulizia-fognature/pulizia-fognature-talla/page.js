import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Talla",
  canonical: links.servizi["pulizia-fognature"]["talla"],
});
export default withBaseProps({
  title: "Pulizia fognature Talla",
  locationNames: { label: "Talla", href: "talla" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});

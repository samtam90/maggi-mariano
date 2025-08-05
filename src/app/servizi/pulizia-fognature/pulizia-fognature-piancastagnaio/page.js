import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Piancastagnaio",
  canonical: links.servizi["pulizia-fognature"]["piancastagnaio"],
});
export default withBaseProps({
  title: "Pulizia fognature Piancastagnaio",
  locationNames: { label: "Piancastagnaio", href: "piancastagnaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});

import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Latina",
  canonical: links.servizi["pulizia-fognature"]["latina"],
});
export default withBaseProps({
  title: "Pulizia fognature Latina",
  locationNames: { label: "Latina", href: "latina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});

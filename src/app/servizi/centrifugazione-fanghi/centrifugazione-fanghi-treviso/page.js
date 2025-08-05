import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Treviso",
  canonical: links.servizi["centrifugazione-fanghi"]["treviso"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Treviso",
  locationNames: { label: "Treviso", href: "treviso" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["treviso"],
      name: "Treviso",
  }),
});

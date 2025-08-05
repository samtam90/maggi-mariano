import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Venezia",
  canonical: links.servizi["centrifugazione-fanghi"]["venezia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Venezia",
  locationNames: { label: "Venezia", href: "venezia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["venezia"],
      name: "Venezia",
  }),
});
